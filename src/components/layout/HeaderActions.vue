<script lang="ts" setup>
  import { reactive } from 'vue';
  import { StepinHeaderAction } from 'stepin';
  import DayNightSwitch from '@/components/switch/DayNightSwitch.vue';
  defineEmits<{
    (e: 'showSetting'): void;
  }>();

  const noticeList = reactive([
    {
      title: '消息',
      list: [
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          img: 'src/assets/avatar/face-1.jpg',
          time: 0,
        },
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'src/assets/avatar/face-2.jpg',
          time: 0,
        },
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'src/assets/avatar/face-3.jpg',
          time: 0,
        },
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'src/assets/avatar/face-4.jpg',
          time: 0,
        },
      ],
    },
    {
      title: '动态',
      list: [
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'http://i2.hdslb.com/bfs/face/80b6731ccf865ca7a4ac17e6e8848fd0e34c1b91.jpg',
          time: 0,
        },
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'http://i2.hdslb.com/bfs/face/80b6731ccf865ca7a4ac17e6e8848fd0e34c1b91.jpg',
          time: 0,
        },
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'http://i2.hdslb.com/bfs/face/80b6731ccf865ca7a4ac17e6e8848fd0e34c1b91.jpg',
          time: 0,
        },
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'http://i2.hdslb.com/bfs/face/80b6731ccf865ca7a4ac17e6e8848fd0e34c1b91.jpg',
          time: 0,
        },
      ],
    },
    {
      title: '通知',
      list: [
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'http://i2.hdslb.com/bfs/face/80b6731ccf865ca7a4ac17e6e8848fd0e34c1b91.jpg',
          time: 0,
        },
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'http://i2.hdslb.com/bfs/face/80b6731ccf865ca7a4ac17e6e8848fd0e34c1b91.jpg',
          time: 0,
        },
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'http://i2.hdslb.com/bfs/face/80b6731ccf865ca7a4ac17e6e8848fd0e34c1b91.jpg',
          time: 0,
        },
        {
          title: '影佑',
          content: 'xxxxxxxxxxxxxxxxxx',
          img: 'http://i2.hdslb.com/bfs/face/80b6731ccf865ca7a4ac17e6e8848fd0e34c1b91.jpg',
          time: 0,
        },
      ],
    },
  ]);
</script>
<template>
  <StepinHeaderAction>
    <DayNightSwitch />
  </StepinHeaderAction>

  <StepinHeaderAction>
    <div class="action-item setting" @click="$emit('showSetting')">
      <SettingOutlined />
    </div>
  </StepinHeaderAction>
</template>
<style scoped lang="less">
  .gitee-logo {
    width: 20px;
  }
  .action-item {
    font-size: 20px;
    height: 100%;
    margin: 0 -8px;
    padding: 0 4px;
    line-height: 40px;
    display: flex;
    align-items: center;

    &.setting {
      font-size: 18px;
    }

    &.notice {
      font-size: 18px;
    }
  }
</style>
