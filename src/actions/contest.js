export const ADD_RIDER = "ADD_RIDER";
export const DROP_RIDER = "DROP_RIDER";
export const DROP_SCORE = "DROP_SCORE";
export const ADD_SCORE = "ADD_SCORE";

export function addRider(surfer) {
  return {
    type: ADD_RIDER,
    surfer: surfer, // OBJECT
  };
}

export function dropRider (id) {
  return {
    type: DROP_RIDER,
    id: id, // ID FOR SURFER
  };
}

export function dropScore (index) {
  return {
    type: DROP_SCORE,
    index: index, // INDEX POSITION IN ARRAY
  };
}

export function addScore (score) {
  return {
    type: ADD_SCORE,
    score: score, // NUMBER
  };
}
