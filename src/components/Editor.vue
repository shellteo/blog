<template>
  <div class="quill-editor-example">
    <!-- quill-editor -->
    <quill-editor v-model="content"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>
    <div class="quill-code">
      <div class="title">Code</div>
      <code class="hljs xml" v-html="contentCode"></code>
    </div>
    <div class="displayContent quill-editor">
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'highlight.js/styles/monokai-sublime.css'
  import hljs from 'highlight.js'
  import VueQuillEditor, { Quill } from 'vue-quill-editor'
  import { ImageDrop } from 'quill-image-drop-module'
  import ImageResize from 'quill-image-resize-module'
  Quill.register('modules/imageResize', ImageResize)
  Quill.register('modules/imageDrop', ImageDrop)
  hljs.initHighlightingOnLoad();
  import $ from 'jquery';
  export default {
    data() {
      return {
        name: 'register-modules-example',
        content: `<p><strong><em>Click on the Image Below to resize!</em></strong></p>
                  <pre class="ql-syntax" spellcheck="false">const a = 10;<br>const editorOption = { highlight: text => hljs.highlightAuto(text).value };</pre>
                  <p><img src="https://img.iplaysoft.com/wp-content/uploads/2017/unsplash/unsplash_image.jpg" width="500"></p>
                  <br>
                  <p><strong><em>Or drag/paste an image here.</em></strong></p>`,
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            history: {
              delay: 1000,
              maxStack: 50,
              userOnly: false
            },
            imageDrop: true,
            imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
            },
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        }
      }
    },
    mounted() {
      $('.displayContent pre').each(function (i, block) {
        hljs.highlightBlock(block);
      })
    },
    computed: {
      contentCode() {
        return hljs.highlightAuto(this.content).value
      },
    },
    methods: {
      onEditorBlur(editor) {
        // console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        // console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        // console.log('editor ready!', editor)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
