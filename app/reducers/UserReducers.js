UserInitialState = {
  name: '',
  dob: "",
  profile_completed: '',
  age: 0
}

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER': 
       return [...state, {
        name: action.name,
        dob: action.dob,
        profile_completed: action.profile_completed,
        age: action.age
       }]
    default:
      return state
  }
}

export default UserReducer;