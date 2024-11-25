
export const experimentalDataList = {
    morphology: "Morphology",
    electrophysiology: "Electrophysiology",
    layer_anatomy: "Layer anatomy",
    neuron_density: "Neuron density",
    bouton_density: "Bouton density",
}


export const digitalReconstructionList = {
    single_cell_model: "Single Cell",
    neuron_morphology: "Neuron Morphology",
    neuron_electrophysiology: "Neuron Electrophysiology",
    fact_sheet: "Fact Sheet",
    microcircuit_reconstruction: "Microcircuit Reconstruction",
}
export const networkSimulationList = {
    evoked_sensory_activity_in_vivo_like_condition: "Evoked Sensory Activity In Vivo Like Condition",
    sensory_adaptation_control_vs_cortical_input_in_vivo_like_condition: "Sensory Adaptation Control Vs Cortical Input In Vivo Like Condition",
    transition_from_wakefulness_like_states_to_simulated_cortical: "Transition From Wakefulness Like States To Simulated Cortical",
    spindle_like_oscillations_in_vitro_like_condition: "Spindle Like Oscillations In Vitro Like Condition",
    spindle_like_oscillations_control_vs_gap_junctions_removed: "Spindle Like Oscillations Control Vs Gap Junctions Removed",
}

export const workspacesList = {
    "experimental_data": "Experimental Data",
    "digital_reconstruction": "Digital Reconstruction",
    "network_simulation": "Network simulation",
}

export type ExperimentalDataListKeys = keyof typeof experimentalDataList;
export type DigitalReconstructionListKeys = keyof typeof digitalReconstructionList;
export type NetworkSimulationListKeys = keyof typeof networkSimulationList;

export const pagesMapping = {
    "experimental_data-morphology": "Experimental Data - Morphology",
    "experimental_data-electrophysiology": "Experimental Data - Electrophysiology",
    "experimental_data-bouton_density": "Experimental Data - Bouton Density",
    "experimental_data-layer_anatomy": "Experimental Data - Layer Anatomy",
    "experimental_data-neuron_density": "Experimental Data - Neuron Density",
    "digital_reconstruction-fact_sheet": "Digital Reconstruction - Fact Sheet",
    "digital_reconstruction-microcircuit_reconstruction": "Digital Reconstruction - Microcircuit Reconstruction",
    "digital_reconstruction-neuron_morphology": "Digital Reconstruction - Neuron Morphology",
    "digital_reconstruction-neuron_electrophysiology": "Digital Reconstruction - Neuron Electrophysiology",
    "digital_reconstruction-single_cell_model": "Digital Reconstruction - Single Cell Model",
    "network_simulation-single_cell_model": "Digital Reconstruction - Single Cell Model",
    "network_simulation-evoked_sensory_activity_in_vivo_like_condition": "Network Simulation-Evoked Sensory Activity In Vivo Like Condition",
    "Network Simulation-sensory_adaptation_control_vs_cortical_input_in_vivo_like_condition": "Network Simulation-Sensory Adaptation Control Vs Cortical Input In Vivo Like Condition",
    "network_simulation-transition_from_wakefulness_like_states_to_simulated_cortical": "Network Simulation-Transition From Wakefulness Like States To Simulated Cortical",
    "network_simulation-spindle_like_oscillations_in_vitro_like_condition": "Network Simulation-Spindle Like Oscillations In Vitro Like Condition",
    "network_simulation-spindle_like_oscillations_control_vs_gap_junctions_removed": "Network Simulation-Spindle Like Oscillations Control Vs Gap Junctions Removed",
}

export const getPageTitleMapping = (ws: string, type: string) => pagesMapping[`${ws}-${type}` as keyof typeof pagesMapping];

export type Distribution = {
    contentUrl: string
    name: string;
    contentSize: { value: number };
    encodingFormat: string;
}

export type Artifact = {
    name: string;
    path: string;
    self: string;
    size: number;
    type: string;
    url: string;
    downloadable: boolean;
}

export type Resource = {
    name: string;
    _self: string;
    distribution: Array<Distribution>
}