import React from "react";
import Form from "react-bootstrap/Form";
import { schemes } from "reaviz";

function ColorSchemeField({ widget, setWidget }) {
  let colors = Object.keys(schemes).map((name) => {
    return { label: name, value: name };
  });

  colors = [...colors, { label: "Custom", value: "Custom" }];
  return (
    <Form.Group className="d-none">
      <Form.Label>Цветовая схема</Form.Label>
      <Form.Control
        as="select"
        custom
        value={widget.options.colorScheme}
        onChange={(e) =>
          setWidget({ ...widget, options: { ...widget.options, colorScheme: e.target.value } })
        }
        required
      >
        {colors.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

export default ColorSchemeField;
