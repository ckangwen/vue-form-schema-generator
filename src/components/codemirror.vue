<template>
  <div class="codemirror">
    <codemirror v-model="value" :options="options" />
    <slot :value="value"></slot>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
// base style
import 'codemirror/lib/codemirror.css'
// theme css
import 'codemirror/theme/dracula.css'
// language
import 'codemirror/mode/vue/vue.js'
// active-line.js
import 'codemirror/addon/selection/active-line.js'
// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js'
import 'codemirror/addon/search/searchcursor.js'
// highlightSelectionMatches
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'
// import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'

import 'codemirror/addon/search/match-highlighter.js'
// keyMap
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'

import 'codemirror/addon/search/search.js'
import 'codemirror/keymap/sublime.js'
// foldGutter
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'
export default {
  name: 'vue-codemirror',
  components: {
    codemirror
  },
  props: {
    code: String,
    mode: {
      type: String,
      default: 'text/javascript'
    }
  },
  data () {
    return {
      value: this.code,
      options: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        line: true,
        keyMap: 'sublime',
        mode: this.mode,
        theme: 'dracula',
        scrollbarStyle: 'simple',
        extraKeys: {
          F11 (cm) {
            cm.setOption('fullScreen', !cm.getOption('fullScreen'))
          },
          Esc (cm) {
            if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false)
          }
        }
      }
    }
  }
}
</script>

<style>
.example {
  display: flex;
  height: 100%;
}
.example .codemirror,
.example .pre {
  width: 50%;
  height: 100%;
  margin: 0;
  overflow: auto;
}
.codemirror * {
  font-family: "Fira Code", "Source Han Sans HW SC";
}
</style>
