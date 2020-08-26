<template>
  <div class="model" name="mo">天才从现在诞生</div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Modal extends Vue {
  // 定义ref，用this.$sku就能调用
  // @Ref('sku')
  // private readonly $sku!: HTMLElement
  /**
   * 这是data的
   */
  // private test: number = 1
  /**
   * computed
   */
  // private get test(): boolean {
  //   return true
  // }
  protected async created() {
    console.log('嘿嘿嘿')
  }
  /**
   * 使用async的时候后面是Promise<void>，否则的话只要void
   */
  // private async test(): Promise<void> {}
}
</script>
