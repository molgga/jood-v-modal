export default {
  ConfigSet: {
    title: '',
    description: '',
    lang: 'typescript',
    code: `export default defineComponent({
  setup() {
    const modalService = provideJdModalService();
    modalService.init({
      defaultEntryComponent: CustomModalEntry
    });
  }
});
    `
  },
  DefaultSet: {
    title: '',
    description: '',
    lang: 'typescript',
    code: `export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    modalService.setDefaultEntryComponent(CustomModalEntry);
  }
});
    `
  },
  Open: {
    title: '',
    description: '',
    lang: 'typescript',
    code: `export default defineComponent({
  setup() {
    const modalService = useJdModalService();

    const onOpen1 = () => {
      modalService.open({
        component: SampleModal1,
        overlayClose: true
      });
    };

    const onOpen2 = () => {
      modalService.open({
        component: SampleModal2,
        overlayClose: true
      });
    };

    return { onOpen1, onOpen2 }
  }
});
    `
  }
};
