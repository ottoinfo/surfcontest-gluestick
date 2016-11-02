/* @flow */
import { ADD_RIDER, DROP_RIDER, ADD_SCORE, DROP_SCORE } from "../actions/contest";

const INITIAL_STATE = {
  contest_limit: 4,
  surfers: [
    { id: 12, name: "John John Florence", origin: "HAW", profile: "../../assets/images/jj.png", entered: false },
    { id: 2, name: "Jordy Smith", origin: "ZAF", profile: "../assets/images/js.png", entered: false },
    { id: 5,  name: "Kelly Slater", origin: "USA", profile: "/assets/images/ks.png", entered: false },
    { id: 11, name: "Adriano de Souza", origin: "BRA", profile: "/assets/images/as., entered: falsepng", entered: false },
    { id: 8, name: "Matt Wilkinson", origin: "AUS", profile: "/assets/images/mw.png", entered: false },
  ],
  results: [] // ADD SURFERS & TRACK SCORES
};

const updateObject = (obj, vals)=> { // OldObject, NewValues
  return Object.assign({}, obj, vals);
};

const updateItemInArray = (arry, id, cb)=> { // [{}], id/index, callback
  const update = arry.map(item=> {
    if (item.id !== id) {
      return item; // Leave Alone
    }
    return cb(item); // Manipulate || Callback
  });
  return update; // New||Updated State
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_RIDER: {// ADD SURFER TO CONTEST
      // if (!state.results.find( entry=> entry.id === action.surfer ).length) { // Make sure Surfer isn't already in contest
      //   return state;
      // }

      console.log({action});
      // SURFERS INDEX => {"entered": true}
      const surfersUpdate = updateItemInArray(state.surfers, action.surfer, surfer=> {
        return updateObject(surfer, { entered: true });
      });
      // REULTS PUSH({ id: SURFER.ID, waves: [1,2,3]:ARRAY of SCORES, total: 4:INT of BEST 2 SCORES })
      const resultsUpdate = [...state.results, {
        id: action.surfer,
        waves: [],
        total: 0,
      }];

      console.log({surfersUpdate, resultsUpdate});

      return updateObject(state, {
        surfers: surfersUpdate, 
        results: resultsUpdate,
      });
    }
    case DROP_RIDER: { // REMOVE SURFER FROM CONTEST by SURFERS.ID

      const index = state.results.findIndex( rider=> rider.id === action.id );
      const results = state.results.splice(index,1); // Remove Surfer
      return updateObject(state, { results });
    }
    case DROP_SCORE: { // DROP SURFER SCORE by SURFERS.ID and WAVES.INDEX
      const update = updateItemInArray(state.results, action.index, rider=> {
        const waves = rider.waves.splice(action.index);
        return updateObject(rider, { waves });
      });
      return updateObject(state, { results : update });
    }
    case ADD_SCORE: { // ADD SCORE TO SURFER by SURFERS.ID
      const index = state.results.findIndex( rider=> rider.id === action.id );
      state.results[index].scores.push(action.text.point);
      return [action.text, ...state];
    }
    // case TOP_WAVES: { // GET TOP TWO WAVES
    //   const top_two = waves.sort((a,b)=> a - b ).reverse().slice(0,2) // SORT SCORES LOW TO HIGH then REVERSE ORDER then GET TOP 2
    //   return (top_two[0] || 0) + (top_two[1] || 0)
    // }
    default:
      return state;
  }
};


// const resultsUpdate = updateItemInArray(state.results, action.surfer, rider=> {
//         const waves = rider.waves.splice(action.index);
//         return updateObject(rider, { waves });
//       });
