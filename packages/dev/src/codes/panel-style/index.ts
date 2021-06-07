export default {
  Sample1: {
    title: '',
    description: '',
    lang: 'typescript',
    code: `export default defineComponent({
  setup() {
    const modalService = useJdModalService();

    const onOpen = () => {
      modalService.open({
        panelStyle: {
          borderRadius: '0',
          border: '10px solid #ff0000',
          backgroundColor: '#ffff00',
          margin: '20px 0',
          overflow: 'hidden'
        },
        overlayClose: true,
        component: SampleModal
      });
    };

    onUnmounted(() => {
      modalService.closeAll();
    });

    return {
      onOpen
    };
  }
});`
  }
};
