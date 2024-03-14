

interface SharedContext_FullIncident {
  jsonData_fulltype: string | string[] | number | null;
}

const sharedContext_full: SharedContext_FullIncident = {
  jsonData_fulltype: null

};

export const setSharedContext_FullIncident = (key: keyof SharedContext_FullIncident, value: string | string[] ) => {
  sharedContext_full[key] = value;
};


export const getSharedContext_FullIncident = (key: keyof SharedContext_FullIncident) => {
  return sharedContext_full[key];
};






interface SharedContext_ShellIncident {
  jsonData_shelltype: string | string[] | number | null;
}

const sharedContext_shell: SharedContext_ShellIncident = {
  jsonData_shelltype: null

};

export const setSharedContext_ShellIncident = (key: keyof SharedContext_ShellIncident, value: string | string[] ) => {
  sharedContext_shell[key] = value;
};


export const getSharedContext_ShellIncident = (key: keyof SharedContext_ShellIncident) => {
  return sharedContext_shell[key];
};






interface SharedContext_IncidentsResults {
  jsonData_resultstype: string | string[] | number | null;
} 

const sharedContext_results: SharedContext_IncidentsResults = {
  jsonData_resultstype: null

};

export const setSharedContext_IncidentResults = (key: keyof SharedContext_IncidentsResults, value: string | string[] ) => {
  sharedContext_results[key] = value;
};


export const getSharedContext_IncidentResults = (key: keyof SharedContext_IncidentsResults) => {
  return sharedContext_results[key];
};













//************************************************************************************************************************************* */

// interface Data {
//     name: string;
//     lga: string;
//     loc_address: string;
//     sensitive: string;
//     master: string;
//     RART: string;
//     local_inc_id: string; 
//     triple0_ref: string;
//     reason_noTriple0_ref: string;
//     triple0_RCVDCall: string;
//     Rfs_RCVDCall: string;
//   }



// const handleDataSources = (jsondata: any, env: string) => {
//     let data: Data = {
//         name: '',
//         lga: '',
//         loc_address: '',
//         sensitive: '',
//         master: '',
//         RART: '',
//         local_inc_id: '',
//         triple0_ref: '',
//         reason_noTriple0_ref: '',
//         triple0_RCVDCall: '',
//         Rfs_RCVDCall: '',
//       };
  
//   if (Cypress.env('DATA') === 'json') {
//     data.name = jsondata.inc_name;
//     data.lga = jsondata.LGA[`${Math.floor(Math.random() * jsondata.LGA.length)}`];
//     data.loc_address = jsondata.inc_address[`${Math.floor(Math.random() * jsondata.inc_address.length)}`];
//     data.sensitive = jsondata.inc_sensitive['No'];
//     data.master = jsondata.master_inc['NO'];
//     data.RART = jsondata.Rapid_action['NO'];
//     data.local_inc_id = jsondata.local_inc;
//     data.triple0_ref = jsondata.triple;
//     data.reason_noTriple0_ref = jsondata.reason_notripleZero_ref;
//     data.triple0_RCVDCall = jsondata.triple0_received_time;
//     data.Rfs_RCVDCall = jsondata.agency_received_time;
    
//   } else if (env === 'examples') {
//     // The variables are assumed to be already defined when calling the function
//     // Do nothing here, as the values are directly provided in the step definition
//   }

//   return data;
// };

// module.exports = { handleDataSources };


//************************************************************************************************************************************* */

