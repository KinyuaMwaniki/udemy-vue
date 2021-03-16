export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://udemymainproject-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );

    if (!response.ok) {
      // error
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },

  async loadCoaches(context, payload) {

    if(!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://udemymainproject-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Fetch');
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coachData = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
        id: key,
      };
      coaches.push(coachData);
    }

    context.commit('setCoaches', coaches)
    context.commit('setFetchTimeStamp'); 
  }
};
