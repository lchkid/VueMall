import BackToTop from '@/components/back-to-top/BackToTop'

export const backToTop = {
  data() {
    return {
      isShowBtt: false,
    }
  },
  components: {
    BackToTop
  },
  methods: {
    bttClick() {
      this.$refs.bscroll.backToTop(0, 0);
    },
  }
}