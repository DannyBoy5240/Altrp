import getResponsiveSetting from "../../helpers/get-responsive-setting";
import {styledString} from "../../helpers/styles";

export default function getTournamentStyles(settings, elementId) {
  let styles = [
    'reacket-round-header',
        ['color', 'headers_color', 'color'],
        ['', 'headers_typographic', 'typographic'],
        ['padding', 'headers_padding', 'dimensions'],
    '}',

    //state disabled
    '.state-disabled .reacket-round-header',
    ['color', 'headers_color', 'color', '.state-disabled'],
    ['', 'headers_typographic', 'typographic', '.state-disabled'],
    ['padding', 'headers_padding', 'dimensions', '.state-disabled'],
    '}',

    //state active
    '.active .reacket-round-header',
    ['color', 'headers_color', 'color', '.active'],
    ['', 'headers_typographic', 'typographic', '.active'],
    ['padding', 'headers_padding', 'dimensions', '.active'],
    '}',

    'reacket-player-image',
        ['padding', 'image_padding', 'dimensions'],
    '}',

    //state disabled
    '.state-disabled .reacket-player-image',
    ['padding', 'image_padding', 'dimensions', '.state-disabled'],
    '}',

    //state active
    '.active .reacket-player-image',
    ['padding', 'image_padding', 'dimensions', '.active'],
    '}',

    '.reacket-player',
        ['padding', 'players_padding', 'dimensions'],
        ['background-color', 'players_background_color', 'color'],
        ["border-style", "players_border_type" ],
        ["border-width", "players_border_width", "dimensions"],
        ["border-color", "players_border_color", "color"],
        ["border-radius", "players_border_radius", "dimensions"],
        ['height', 'player_height', 'slider'],
    '}',
    '.reacket-player .reacket-player-score',
        ['padding', 'players_score_padding', 'dimensions'],
        ['color', 'players_score_color', 'color'],
        ['', 'players_score_typographic', 'typographic'],
    '}',
    '.reacket-player .reacket-player-seed',
        ['padding', 'players_seed_padding', 'dimensions'],
        ['color', 'players_seed_color', 'color'],
        ['', 'players_seed_typographic', 'typographic'],
    '}',
    '.reacket-player .reacket-player-name'
        ['color', 'players_label_color', 'color'],
        ['', 'players_label_typographic', 'typographic'],
    '}',


    //state disabled
    '.state-disabled .reacket-player',
    ['padding', 'players_padding', 'dimensions', '.state-disabled'],
    ['background-color', 'players_background_color', 'color', '.state-disabled'],
    ["border-style", "players_border_type", "", '.state-disabled'],
    ["border-width", "players_border_width", "dimensions", '.state-disabled'],
    ["border-color", "players_border_color", "color", '.state-disabled'],
    ["border-radius", "players_border_radius", "dimensions", '.state-disabled'],
    ['height', 'player_height', 'slider', '.state-disabled'],
    '}',
    '.state-disabled .reacket-player .reacket-player-score',
    ['padding', 'players_score_padding', 'dimensions', '.state-disabled'],
    ['color', 'players_score_color', 'color', '.state-disabled'],
    ['', 'players_score_typographic', 'typographic', '.state-disabled'],
    '}',
    '.state-disabled .reacket-player .reacket-player-seed',
    ['padding', 'players_seed_padding', 'dimensions', '.state-disabled'],
    ['color', 'players_seed_color', 'color', '.state-disabled'],
    ['', 'players_seed_typographic', 'typographic', '.state-disabled'],
    '}',
    '.state-disabled .reacket-player .reacket-player-name'
    ['color', 'players_label_color', 'color', '.state-disabled'],
    ['', 'players_label_typographic', 'typographic', '.state-disabled'],
    '}',
    //state active
    '.active .reacket-player',
    ['padding', 'players_padding', 'dimensions', '.active'],
    ['background-color', 'players_background_color', 'color', '.active'],
    ["border-style", "players_border_type", "", '.active'],
    ["border-width", "players_border_width", "dimensions", '.active'],
    ["border-color", "players_border_color", "color", '.active'],
    ["border-radius", "players_border_radius", "dimensions", '.active'],
    ['height', 'player_height', 'slider', '.active'],
    '}',
    '.active .reacket-player .reacket-player-score',
    ['padding', 'players_score_padding', 'dimensions', '.active'],
    ['color', 'players_score_color', 'color', '.active'],
    ['', 'players_score_typographic', 'typographic', '.active'],
    '}',
    '.active .reacket-player .reacket-player-seed',
    ['padding', 'players_seed_padding', 'dimensions', '.active'],
    ['color', 'players_seed_color', 'color', '.active'],
    ['', 'players_seed_typographic', 'typographic', '.active'],
    '}',
    '.active .reacket-player .reacket-player-name'
      ['color', 'players_label_color', 'color', '.active'],
    ['', 'players_label_typographic', 'typographic', '.active'],
    '}',

    '.reacket-player.reacket-winner',
        ['padding', 'players_winners_padding', 'dimensions'],
        ['background-color', 'players_winners_background_color', 'color'],
        ["border-style", "players_winners_border_type" ],
        ["border-width", "players_winners_border_width", "dimensions"],
        ["border-color", "players_winners_border_color", "color"],
        ["border-radius", "players_winners_border_radius", "dimensions"],
    '}',
    '.reacket-player.reacket-winner .reacket-player-score',
        ['padding', 'players_winners_score_padding', 'dimensions'],
        ['color', 'players_winners_score_color', 'color'],
        ['', 'players_winners_score_typographic', 'typographic'],
    '}',
    '.reacket-player.reacket-winner .reacket-player-seed',
        ['padding', 'players_winners_seed_padding', 'dimensions'],
        ['color', 'players_winners_seed_color', 'color'],
        ['', 'players_winners_seed_typographic', 'typographic'],
    '}',
    '.reacket-player.reacket-winner .reacket-player-name',
        ['color', 'players_winners_label_color', 'color'],
        ['', 'players_winners_label_typographic', 'typographic'],
    '}',

    //state disabled
    '.state-disabled .reacket-player.reacket-winner',
    ['padding', 'players_winners_padding', 'dimensions', '.state-disabled'],
    ['background-color', 'players_winners_background_color', 'color', '.state-disabled'],
    ["border-style", "players_winners_border_type", "", '.state-disabled'],
    ["border-width", "players_winners_border_width", "dimensions", '.state-disabled'],
    ["border-color", "players_winners_border_color", "color", '.state-disabled'],
    ["border-radius", "players_winners_border_radius", "dimensions", '.state-disabled'],
    '}',
    '.state-disabled .reacket-player.reacket-winner .reacket-player-score',
    ['padding', 'players_winners_score_padding', 'dimensions', '.state-disabled'],
    ['color', 'players_winners_score_color', 'color', '.state-disabled'],
    ['', 'players_winners_score_typographic', 'typographic', '.state-disabled'],
    '}',
    '.state-disabled .reacket-player.reacket-winner .reacket-player-seed',
    ['padding', 'players_winners_seed_padding', 'dimensions', '.state-disabled'],
    ['color', 'players_winners_seed_color', 'color', '.state-disabled'],
    ['', 'players_winners_seed_typographic', 'typographic', '.state-disabled'],
    '}',
    '.state-disabled .reacket-player.reacket-winner .reacket-player-name',
    ['color', 'players_winners_label_color', 'color', '.state-disabled'],
    ['', 'players_winners_label_typographic', 'typographic', '.state-disabled'],
    '}',

    //state active
    //state disabled
    '.active .reacket-player.reacket-winner',
    ['padding', 'players_winners_padding', 'dimensions', '.active'],
    ['background-color', 'players_winners_background_color', 'color', '.active'],
    ["border-style", "players_winners_border_type", "", '.active'],
    ["border-width", "players_winners_border_width", "dimensions", '.active'],
    ["border-color", "players_winners_border_color", "color", '.active'],
    ["border-radius", "players_winners_border_radius", "dimensions", '.active'],
    '}',
    '.active .reacket-player.reacket-winner .reacket-player-score',
    ['padding', 'players_winners_score_padding', 'dimensions', '.active'],
    ['color', 'players_winners_score_color', 'color', '.active'],
    ['', 'players_winners_score_typographic', 'typographic', '.active'],
    '}',
    '.active .reacket-player.reacket-winner .reacket-player-seed',
    ['padding', 'players_winners_seed_padding', 'dimensions', '.active'],
    ['color', 'players_winners_seed_color', 'color', '.active'],
    ['', 'players_winners_seed_typographic', 'typographic', '.active'],
    '}',
    '.active .reacket-player.reacket-winner .reacket-player-name',
    ['color', 'players_winners_label_color', 'color', '.active'],
    ['', 'players_winners_label_typographic', 'typographic', '.active'],
    '}',


    '.reacket-highlighted',
        () => `background-color: ${getResponsiveSetting(settings, 'players_highlighted_background_color')?.color} !important;`,
        ['padding', 'players_highlighted_padding', 'dimensions'],
        ["border-style", "players_highlighted_border_type" ],
        ["border-width", "players_highlighted_border_width", "dimensions"],
        ["border-color", "players_highlighted_border_color", "color"],
        ["border-radius", "players_highlighted_border_radius", "dimensions"],
    '}',
    '.reacket-highlighted .reacket-player-score',
        () => `color: ${getResponsiveSetting(settings, 'players_highlighted_score_color')?.color} !important;`,
        ['padding', 'players_highlighted_score_padding', 'dimensions'],
        ['', 'players_highlighted_score_typographic', 'typographic'],
    '}',
    '.reacket-highlighted .reacket-player-seed',
        () => `color: ${getResponsiveSetting(settings, 'players_highlighted_seed_color')?.color} !important;`,
        ['padding', 'players_highlighted_seed_padding', 'dimensions'],
        ['', 'players_highlighted_seed_typographic', 'typographic'],
    '}',
    '.reacket-highlighted .reacket-player-name',
        () => `color: ${getResponsiveSetting(settings, 'players_highlighted_label_color')?.color} !important;`,
        ['', 'players_highlighted_label_typographic', 'typographic'],
    '}',


    //state disabled
    '.state-disabled .reacket-highlighted',
    () => `background-color: ${getResponsiveSetting(settings, 'players_highlighted_background_color', '.state-disabled')?.color} !important;`,
    ['padding', 'players_highlighted_padding', 'dimensions', '.state-disabled'],
    ["border-style", "players_highlighted_border_type", "", '.state-disabled'],
    ["border-width", "players_highlighted_border_width", "dimensions", '.state-disabled'],
    ["border-color", "players_highlighted_border_color", "color", '.state-disabled'],
    ["border-radius", "players_highlighted_border_radius", "dimensions", '.state-disabled'],
    '}',
    '.state-disabled .reacket-highlighted .reacket-player-score',
    () => `color: ${getResponsiveSetting(settings, 'players_highlighted_score_color', '.state-disabled')?.color} !important;`,
    ['padding', 'players_highlighted_score_padding', 'dimensions', '.state-disabled'],
    ['', 'players_highlighted_score_typographic', 'typographic', '.state-disabled'],
    '}',
    '.state-disabled .reacket-highlighted .reacket-player-seed',
    () => `color: ${getResponsiveSetting(settings, 'players_highlighted_seed_color', '.state-disabled')?.color} !important;`,
    ['padding', 'players_highlighted_seed_padding', 'dimensions', '.state-disabled'],
    ['', 'players_highlighted_seed_typographic', 'typographic', '.state-disabled'],
    '}',
    '.state-disabled .reacket-highlighted .reacket-player-name',
    () => `color: ${getResponsiveSetting(settings, 'players_highlighted_label_color', '.state-disabled')?.color} !important;`,
    ['', 'players_highlighted_label_typographic', 'typographic', '.state-disabled'],
    '}',

    //state active
    '.active .reacket-highlighted',
    () => `background-color: ${getResponsiveSetting(settings, 'players_highlighted_background_color', '.active')?.color} !important;`,
    ['padding', 'players_highlighted_padding', 'dimensions', '.active'],
    ["border-style", "players_highlighted_border_type", "", '.active'],
    ["border-width", "players_highlighted_border_width", "dimensions", '.active'],
    ["border-color", "players_highlighted_border_color", "color", '.active'],
    ["border-radius", "players_highlighted_border_radius", "dimensions", '.active'],
    '}',
    '.active .reacket-highlighted .reacket-player-score',
    () => `color: ${getResponsiveSetting(settings, 'players_highlighted_score_color', '.active')?.color} !important;`,
    ['padding', 'players_highlighted_score_padding', 'dimensions', '.active'],
    ['', 'players_highlighted_score_typographic', 'typographic', '.active'],
    '}',
    '.active .reacket-highlighted .reacket-player-seed',
    () => `color: ${getResponsiveSetting(settings, 'players_highlighted_seed_color', '.active')?.color} !important;`,
    ['padding', 'players_highlighted_seed_padding', 'dimensions', '.active'],
    ['', 'players_highlighted_seed_typographic', 'typographic', '.active'],
    '}',
    '.active .reacket-highlighted .reacket-player-name',
    () => `color: ${getResponsiveSetting(settings, 'players_highlighted_label_color', '.active')?.color} !important;`,
    ['', 'players_highlighted_label_typographic', 'typographic', '.active'],
    '}',



    '.reacket-horizontal-line',
        () => `border-style: ${getResponsiveSetting(settings, 'line_type')} !important;`,
        () => `border-color: ${getResponsiveSetting(settings, 'line_color')?.color} !important;`,
        () => `border-width: ${getResponsiveSetting(settings, 'line_width')?.size}px !important;`,
    '}',

    '.reacket-vertical-line',
        () => `border-right-style: ${getResponsiveSetting(settings, 'line_type')} !important;`,
        () => `border-right-color: ${getResponsiveSetting(settings, 'line_color')?.color} !important;`,
        () => `border-right-width: ${getResponsiveSetting(settings, 'line_width')?.size * 2}px !important;`,
    '}',

    '.reacket-match-id',
        ['padding', 'match_id_padding', 'dimensions'],
        ['color', 'match_id_color', 'color'],
        ['', 'match_id_typographic', 'typographic'],
    '}',

    //state disabled
    '.state-disabled .reacket-horizontal-line',
    () => `border-style: ${getResponsiveSetting(settings, 'line_type', '.state-disabled')} !important;`,
    () => `border-color: ${getResponsiveSetting(settings, 'line_color', '.state-disabled')?.color} !important;`,
    () => `border-width: ${getResponsiveSetting(settings, 'line_width', '.state-disabled')?.size}px !important;`,
    '}',

    '.state-disabled .reacket-vertical-line',
    () => `border-right-style: ${getResponsiveSetting(settings, 'line_type', '.state-disabled')} !important;`,
    () => `border-right-color: ${getResponsiveSetting(settings, 'line_color', '.state-disabled')?.color} !important;`,
    () => `border-right-width: ${getResponsiveSetting(settings, 'line_width', '.state-disabled')?.size * 2}px !important;`,
    '}',

    '.state-disabled .reacket-match-id',
    ['padding', 'match_id_padding', 'dimensions', '.state-disabled'],
    ['color', 'match_id_color', 'color', '.state-disabled'],
    ['', 'match_id_typographic', 'typographic', '.state-disabled'],
    '}',
  ]

  return styledString(styles, settings)
}