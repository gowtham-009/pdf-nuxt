<template>
    <div>
        <div id="webviewer" ref="viewer"></div>
    </div>
</template>

<script>
export default {
    name: 'WebViewer',
    props: {
        path: String,
        url: String
    },
    mounted() {
        if (typeof window !== 'undefined') {
            import('@pdftron/webviewer').then(({ default: WebViewer }) => {
                WebViewer({
                    path: '../webviewer',
                    initialDoc: this.url,
                }, this.$refs.viewer).then(instance => {
                    // Do something with the WebViewer instance if needed
                }).catch(error => {
                    console.error('Error initializing WebViewer:', error);
                });
            });
        }
    }
}
</script>

<style>

</style>
