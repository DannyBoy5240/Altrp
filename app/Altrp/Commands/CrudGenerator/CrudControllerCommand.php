<?php

namespace App\Altrp\Commands\CrudGenerator;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Str;

class CrudControllerCommand extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'crud:controller
                            {name : The name of the controler.}
                            {--crud-name= : The name of the Crud.}
                            {--model-name= : The name of the Model.}
                            {--model-namespace= : The namespace of the Model.}
                            {--controller-namespace= : Namespace of the controller.}
                            {--view-path= : The name of the view path.}
                            {--fields= : Field names for the form & migration.}
                            {--route-group= : Prefix of the route group.}
                            {--pagination=25 : The amount of models per page for index pages.}
                            {--force : Overwrite already existing controller.}
                            {--relations : Relations for methods of controller.}
                            {--custom-namespaces= : Custom namespaces of the controller.}
                            {--custom-traits= : Custom traits of the controller.}
                            {--custom-properties= : Custom props of the controller.}
                            {--custom-methods= : Custom methods of the controller.}
                            {--sql-editors= : Methods with sql queries in the controller.}
                            {--customizers= : Methods created with customizers in the controller.}
                            {--options= : Resource data for select options.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new resource controller.';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Controller';

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return config('crudgenerator.custom_template')
        ? config('crudgenerator.path') . 'controllers/create_controller.stub'
        : __DIR__ . '/../stubs/controllers/create_controller.stub';
    }

    /**
     * Get the default namespace for the class.
     *
     * @param  string $rootNamespace
     *
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace . '\\' . ($this->option('controller-namespace') ? $this->option('controller-namespace') : 'Http\Controllers');
    }

    /**
     * Determine if the class already exists.
     *
     * @param  string  $rawName
     * @return bool
     */
    protected function alreadyExists($rawName)
    {
        if ($this->option('force')) {
            return false;
        }
        return parent::alreadyExists($rawName);
    }

    /**
     * Build the model class with the given name.
     *
     * @param  string  $name
     *
     * @return string
     */
    protected function buildClass($name)
    {
        $stub = $this->files->get($this->getStub());

        $viewPath = $this->option('view-path') ? $this->option('view-path') . '.' : '';
        $crudName = strtolower($this->option('crud-name'));
        $crudNameSingular = Str::singular($crudName);
        $modelName = $this->option('model-name');
        $modelNamespace = $this->option('model-namespace');
        $routeGroup = ($this->option('route-group')) ? $this->option('route-group') . '/' : '';
        $routePrefix = ($this->option('route-group')) ? $this->option('route-group') : '';
        $routePrefixCap = ucfirst($routePrefix);
        $perPage = intval($this->option('pagination'));
        $viewName = Str::snake($this->option('crud-name'), '-');
        $fields = $this->option('fields');
//        $validations = rtrim($this->option('validations'), ';');
        $relations = $this->option('relations') ? explode(';', $this->option('relations')) : '';
        $customNamespaces = $this->option('custom-namespaces') ?? '';
        $customTraits = $this->option('custom-traits') ?? '';
        $customProperties = $this->option('custom-properties') ?? '';
        $customMethods = $this->option('custom-methods') ?? '';
        $sqlEditors = $this->option('sql-editors') ?? '';
        $customizers = $this->option('customizers') ?? '';
        $options = $this->option('options') ?? '';

        $storeRequest = $modelName . 'StoreRequest';
        $updateRequest = $modelName . 'UpdateRequest';
        $requestNamespaces = "use App\Http\Requests\AltrpRequests\\"
            . str_replace('AltrpModels\\', '', $modelNamespace) . $storeRequest . ";\n"
            . "use App\Http\Requests\AltrpRequests\\"
            . str_replace('AltrpModels\\', '', $modelNamespace) . $updateRequest . ";";

//        $validationRules = '';
//        if (trim($validations) != '') {
//            $validationRules = "\$this->validate(\$request, [";
//
//            $rules = explode(';', $validations);
//            foreach ($rules as $v) {
//                if (trim($v) == '') {
//                    continue;
//                }
//
//                // extract field name and args
//                $parts = explode('#', $v);
//                $fieldName = trim($parts[0]);
//                $rules = trim($parts[1]);
//                $validationRules .= "\n\t\t\t'$fieldName' => '$rules',";
//            }
//
//            $validationRules = substr($validationRules, 0, -1); // lose the last comma
//            $validationRules .= "\n\t\t]);";
//        }

        if (\App::VERSION() < '5.3') {
            $snippet = <<<EOD
        if (\$request->hasFile('{{fieldName}}')) {
            \$file = \$request->file('{{fieldName}}');
            \$fileName = str_random(40) . '.' . \$file->getClientOriginalExtension();
            \$destinationPath = storage_path('/app/public/uploads');
            \$file->move(\$destinationPath, \$fileName);
            \$requestData['{{fieldName}}'] = 'uploads/' . \$fileName;
        }
EOD;
        } else {
            $snippet = <<<EOD
        if (\$request->hasFile('{{fieldName}}')) {
            \$requestData['{{fieldName}}'] = \$request->file('{{fieldName}}')
                ->store('uploads', 'public');
        }
EOD;
        }

        $fieldsArray = explode(';', $fields);
        $fileSnippet = '';
        $whereSnippet = '';

        if ($fields) {
            $x = 0;
            foreach ($fieldsArray as $index => $item) {
                $itemArray = explode('#', $item);

                if (trim($itemArray[1]) == 'file') {
                    $fileSnippet .= str_replace('{{fieldName}}', trim($itemArray[0]), $snippet) . "\n";
                }

                $fieldName = trim($itemArray[0]);

                $whereSnippet .= ($index == 0) ? "where('$fieldName', 'LIKE', \"%\$keyword%\")" . "\n                " : "->orWhere('$fieldName', 'LIKE', \"%\$keyword%\")" . "\n                ";
            }

            $whereSnippet .= "->";
        }

        return $this->replaceNamespace($stub, $name)
            ->replaceViewPath($stub, $viewPath)
            ->replaceViewName($stub, $viewName)
            ->replaceCrudName($stub, $crudName)
            ->replaceCrudNameSingular($stub, $crudNameSingular)
            ->replaceModelName($stub, $modelName)
            ->replaceModelNamespace($stub, $modelNamespace)
            ->replaceModelNamespaceSegments($stub, $modelNamespace)
            ->replaceRouteGroup($stub, $routeGroup)
            ->replaceRoutePrefix($stub, $routePrefix)
            ->replaceRoutePrefixCap($stub, $routePrefixCap)
            ->replaceStoreRequest($stub, $storeRequest)
            ->replaceUpdateRequest($stub, $updateRequest)
            ->replaceRequestNamespaces($stub, $requestNamespaces)
            ->replaceRelations($stub, $relations)
            ->replaceCustomNamespaces($stub, $customNamespaces)
            ->replaceCustomTraits($stub, $customTraits)
            ->replaceCustomProperties($stub, $customProperties)
            ->replaceCustomMethods($stub, $customMethods)
            ->replaceSqlEditors($stub, $sqlEditors)
            ->replaceCustomizers($stub, $customizers)
            ->replaceOptions($stub, $options)
            ->replacePaginationNumber($stub, $perPage)
            ->replaceFileSnippet($stub, $fileSnippet)
            ->replaceWhereSnippet($stub, $whereSnippet)
            ->replaceClass($stub, $name);
    }

    protected function replaceOptions(&$stub, $options)
    {
        $stub = str_replace('{{options}}', $options, $stub);
        return $this;
    }

    protected function replaceStoreRequest(&$stub, $storeRequest)
    {
        $stub = str_replace('{{storeRequest}}', $storeRequest, $stub);
        return $this;
    }

    protected function replaceUpdateRequest(&$stub, $updateRequest)
    {
        $stub = str_replace('{{updateRequest}}', $updateRequest, $stub);
        return $this;
    }

    protected function replaceRequestNamespaces(&$stub, $requestNamespaces)
    {
        $stub = str_replace('{{requestNamespaces}}', $requestNamespaces, $stub);
        return $this;
    }

    /**
     * Replace the relations for the given stub.
     *
     * @param $stub
     * @param $relations
     *
     * @return $this
     */
    protected function replaceRelations(&$stub, $relations)
    {
        $relations = $relations
            ? '->load([\'' . implode("','", $relations) . '\'])' : '';
        $stub = str_replace('{{relations}}', $relations, $stub);
        return $this;
    }

    /**
     * Replace the customNamespaces for the given stub.
     *
     * @param $stub
     * @param $customNamespaces
     *
     * @return $this
     */
    protected function replaceCustomNamespaces(&$stub, $customNamespaces)
    {
        $stub = str_replace('{{customNamespaces}}', $customNamespaces, $stub);
        return $this;
    }

    /**
     * Replace the customTraits for the given stub.
     *
     * @param $stub
     * @param $customTraits
     *
     * @return $this
     */
    protected function replaceCustomTraits(&$stub, $customTraits)
    {
        $stub = str_replace('{{customTraits}}', $customTraits, $stub);
        return $this;
    }

    /**
     * Replace the customProperties for the given stub.
     *
     * @param $stub
     * @param $customProperties
     *
     * @return $this
     */
    protected function replaceCustomProperties(&$stub, $customProperties)
    {
        $stub = str_replace('{{customProperties}}', $customProperties, $stub);
        return $this;
    }

    /**
     * Replace the customMethods for the given stub.
     *
     * @param $stub
     * @param $customMethods
     *
     * @return $this
     */
    protected function replaceCustomMethods(&$stub, $customMethods)
    {
        $stub = str_replace('{{customMethods}}', $customMethods, $stub);
        return $this;
    }
    /**
     * Replace the customizers for the given stub.
     *
     * @param $stub
     * @param $customizers
     *
     * @return $this
     */
    protected function replaceCustomizers(&$stub, $customizers)
    {
        $stub = str_replace('{{customizers}}', $customizers, $stub);
        return $this;
    }

    /**
     * Replace the viewName for the given stub.
     *
     * @param string $stub
     * @param string $viewName
     *
     * @return $this
     */
    protected function replaceViewName(&$stub, $viewName)
    {
        $stub = str_replace('{{viewName}}', $viewName, $stub);

        return $this;
    }

    /**
     * Replace the viewPath for the given stub.
     *
     * @param  string  $stub
     * @param  string  $viewPath
     *
     * @return $this
     */
    protected function replaceViewPath(&$stub, $viewPath)
    {
        $stub = str_replace('{{viewPath}}', $viewPath, $stub);

        return $this;
    }

    /**
     * Replace the crudName for the given stub.
     *
     * @param  string  $stub
     * @param  string  $crudName
     *
     * @return $this
     */
    protected function replaceCrudName(&$stub, $crudName)
    {
        $stub = str_replace('{{crudName}}', $crudName, $stub);

        return $this;
    }

    /**
     * Replace the crudNameSingular for the given stub.
     *
     * @param  string  $stub
     * @param  string  $crudNameSingular
     *
     * @return $this
     */
    protected function replaceCrudNameSingular(&$stub, $crudNameSingular)
    {
        $stub = str_replace('{{crudNameSingular}}', $crudNameSingular, $stub);

        return $this;
    }

    /**
     * Replace the modelName for the given stub.
     *
     * @param  string  $stub
     * @param  string  $modelName
     *
     * @return $this
     */
    protected function replaceModelName(&$stub, $modelName)
    {
        $stub = str_replace('{{modelName}}', $modelName, $stub);

        return $this;
    }

    /**
     * Replace the modelNamespace for the given stub.
     *
     * @param  string  $stub
     * @param  string  $modelNamespace
     *
     * @return $this
     */
    protected function replaceModelNamespace(&$stub, $modelNamespace)
    {
        $stub = str_replace('{{modelNamespace}}', $modelNamespace, $stub);

        return $this;
    }

    /**
     * Replace the modelNamespace segments for the given stub
     *
     * @param $stub
     * @param $modelNamespace
     *
     * @return $this
     */
    protected function replaceModelNamespaceSegments(&$stub, $modelNamespace)
    {
        $modelSegments = explode('\\', $modelNamespace);
        foreach ($modelSegments as $key => $segment) {
            $stub = str_replace('{{modelNamespace[' . $key . ']}}', $segment, $stub);
        }

        $stub = preg_replace('{{modelNamespace\[\d*\]}}', '', $stub);

        return $this;
    }

    /**
     * Replace the routePrefix for the given stub.
     *
     * @param  string  $stub
     * @param  string  $routePrefix
     *
     * @return $this
     */
    protected function replaceRoutePrefix(&$stub, $routePrefix)
    {
        $stub = str_replace('{{routePrefix}}', $routePrefix, $stub);

        return $this;
    }

    /**
     * Replace the routePrefixCap for the given stub.
     *
     * @param  string  $stub
     * @param  string  $routePrefixCap
     *
     * @return $this
     */
    protected function replaceRoutePrefixCap(&$stub, $routePrefixCap)
    {
        $stub = str_replace('{{routePrefixCap}}', $routePrefixCap, $stub);

        return $this;
    }

    /**
     * Replace the routeGroup for the given stub.
     *
     * @param  string  $stub
     * @param  string  $routeGroup
     *
     * @return $this
     */
    protected function replaceRouteGroup(&$stub, $routeGroup)
    {
        $stub = str_replace('{{routeGroup}}', $routeGroup, $stub);

        return $this;
    }

    /**
     * Replace the validationRules for the given stub.
     *
     * @param  string  $stub
     * @param  string  $validationRules
     *
     * @return $this
     */
    protected function replaceValidationRules(&$stub, $validationRules)
    {
        $stub = str_replace('{{validationRules}}', $validationRules, $stub);

        return $this;
    }

    /**
     * Replace the pagination placeholder for the given stub
     *
     * @param $stub
     * @param $perPage
     *
     * @return $this
     */
    protected function replacePaginationNumber(&$stub, $perPage)
    {
        $stub = str_replace('{{pagination}}', $perPage, $stub);

        return $this;
    }

    /**
     * Replace the file snippet for the given stub
     *
     * @param $stub
     * @param $fileSnippet
     *
     * @return $this
     */
    protected function replaceFileSnippet(&$stub, $fileSnippet)
    {
        $stub = str_replace('{{fileSnippet}}', $fileSnippet, $stub);

        return $this;
    }

    /**
     * Replace the where snippet for the given stub
     *
     * @param $stub
     * @param $whereSnippet
     *
     * @return $this
     */
    protected function replaceWhereSnippet(&$stub, $whereSnippet)
    {
        $stub = str_replace('{{whereSnippet}}', $whereSnippet, $stub);

        return $this;
    }

    /**
     * Replace the sql editors
     *
     * @param $stub
     * @param $sqlEditors
     * @return $this
     */
    protected function replaceSqlEditors(&$stub, $sqlEditors)
    {
        $stub = str_replace('{{sqlEditors}}', $sqlEditors, $stub);

        return $this;
    }
}
