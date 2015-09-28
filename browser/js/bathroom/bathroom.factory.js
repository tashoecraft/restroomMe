app.factory('bathroom', ($http) => {
  return {
    getAllBathrooms: () => {
      return $http.get(`/api/bathroom`)
        .then(response => response.data);
    },
    getOneBathroom: bathroomId => {
      return $http.get(`/api/bathroom/${bathroomId}`)
        .then(response => response.data);
    },
    postBathroom: newBathroom => {
      return $http.post(`/api/bathroom`, {
          newBathroom: newBathroom
        })
        .then(response => response.data);
    },
    updateBathroom: (bathroomId, updatedBathroom) => {
      return $http.put(`/api/bathroom/${bathroomId}`, {
          updatedBathroom: updatedBathroom
        })
        .then(response => response.data);
    },
    deleteBathroom: bathroomId => {
      return $http.delete(`/api/bathroom/${bathroomId}`)
        .then(response => response.data);
    }
  };
});
