<template>
  <div>
    vue2.7
    <p>{{ message }}</p>
  </div>
</template>

<script setup >
import { useRequest } from 'vue-request';
import axios from 'axios';
const message = 'Hello Vue!'
// console.log(useRequest)
// 请求接口 /api/get
// const { data, loading, error } = useRequest({
// 		url: '/api/post',
// 		method: 'post',
// 	})


const getUser = userName => {
  return axios.post('/api/post', {
    params: {
      name: userName,
    },
  });
};
getUser()

</script>

<style scoped></style>
