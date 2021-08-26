<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            1、下面是两个异步接口调取的方法，需要等两个方法成功后对数据进行拼装才能使用
          </h3>
          <pre>
const roleInfoSelectAll = () => {
    return new Promise((resolve, reject) => {
        roleInfoSVRequest.selectAll({}).then((result: any) => {
            if (result.data.resultCode === '000000') {
                resolve(result.data.result)
            } else {
                reject(result);
            }
        })
    })
}
const userRoleSelectRolesByUserId = (record: any) => {
    return new Promise((resolve, reject) => {
        userRoleSVRequest.selectRolesByUserId({userId: record.userId}).then((result: any) => {
            if (result.data.resultCode === '000000') {
                resolve(result.data.result)
            } else {
                reject(result);
            }
        })
    })
}
roleInfoSVRequest.selectAll  userRoleSVRequest.selectRolesByUserId  是两个后台查询接口</pre>
          <h3>2、使用async 加await 实现</h3>
          <pre>
async function getUserForRole(record:any) {
    let roleList = await roleInfoSelectAll();
    let userRole = await userRoleSelectRolesByUserId(record);
     // 拼接逻辑
    for (let i = 0; i < roleList.length; i++) {
        roleList[i].checked = false;
        for (let j = 0; j < userRole.length; j++) {
            if (roleList[i].roleId === userRole[j].roleId) {
                roleList[i].checked = true;
            }
        }
    }
}</pre>
          <h3>
            3、使用Promise.all 实现
          </h3>
          <pre>
Promise.all([roleInfoSelectAll(), userRoleSelectRolesByUserId(record)]).then(value => {
    const roleList: any = value[0];   //第一个请求的数据
    const userRole: any = value[1];   //第二个请求的数据
    // 拼接逻辑
    for (let i = 0; i < roleList.length; i++) {
        roleList[i].checked = false;
        for (let j = 0; j < userRole.length; j++) {
            if (roleList[i].roleId === userRole[j].roleId) {
                roleList[i].checked = true;
            }
        }
    }
})</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
