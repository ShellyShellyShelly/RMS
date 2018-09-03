<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator"/>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list" class="information">
        <DropdownItem>
          <div class="l">用户信息</div>
          <div class="r">修改密码</div>
        </DropdownItem>
        <DropdownItem>
          <div class="l">登录名</div>
          <div class="r">乔伊</div>
        </DropdownItem>
        <DropdownItem>
          <div class="l">本次登陆</div>
          <div class="r">2018-7-5 14：00：00：00</div>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvator: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    handleClick (name) {
      switch (name) {
        case 'logout':
          this.handleLogOut().then(() => {
            this.$router.push({
              name: 'login'
            })
          })
          break
      }
    }
  }
}
</script>
