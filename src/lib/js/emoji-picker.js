import Config from './config'
import jQuery from 'jquery'
import {emojiareaPlugin} from './jquery.emojiarea'
const $ = jQuery

emojiareaPlugin(jQuery, window, document)
export class EmojiPicker {
  constructor (options) {
    var ref, ref1
    if (options == null) {
      options = {}
    }
    $.emojiarea.iconSize = (ref = options.iconSize) != null ? ref : 25
    $.emojiarea.assetsPath = (ref1 = options.assetsPath) != null ? ref1 : ''
    this.generateEmojiIconSets(options)
    if (!options.emojiable_selector) {
      options.emojiable_selector = '[data-emojiable=true]'
    }
    this.options = options
  }
  clear () {
    console.log('clear')  
    debugger
  }
  discover () {
    var isiOS
    isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    if (isiOS) {
      return
    }
    return $(this.options.emojiable_selector).emojiarea($.extend({
      emojiPopup: this,
      norealTime: true
    }, this.options))
  };

  generateEmojiIconSets (options) {
    var column, dataItem, i, icons, j, name, reverseIcons, row, totalColumns
    icons = {}
    reverseIcons = {}
    i = void 0
    j = void 0
    name = void 0
    dataItem = void 0
    row = void 0
    column = void 0
    totalColumns = void 0
    j = 0
    while (j < Config.EmojiCategories.length) {
      totalColumns = Config.EmojiCategorySpritesheetDimens[j][1]
      i = 0
      while (i < Config.EmojiCategories[j].length) {
        dataItem = Config.Emoji[Config.EmojiCategories[j][i]]
        name = dataItem[1][0]
        row = Math.floor(i / totalColumns)
        column = i % totalColumns
        icons[':' + name + ':'] = [j, row, column, ':' + name + ':']
        reverseIcons[name] = dataItem[0]
        i++
      }
      j++
    }
    $.emojiarea.icons = icons
    $.emojiarea.reverseIcons = reverseIcons
    return $.emojiarea.reverseIcons
  }

  colonToUnicode (input) {
    if (!input) {
      return ''
    }
    if (!Config.rx_colons) {
      Config.init_unified()
    }
    return input.replace(Config.rx_colons, function (m) {
      var val
      val = Config.mapcolon[m]
      if (val) {
        return val
      } else {
        return ''
      }
    })
  }

  unicodeToImage (input) {
    if (!input) {
      return ''
    }
    if (!Config.rx_codes) {
      Config.init_unified()
    }
    return input.replace(Config.rx_codes, function (m) {
      var $img, val
      val = Config.reversemap[m]
      if (val) {
        val = ':' + val + ':'
        $img = $.emojiarea.createIcon($.emojiarea.icons[val])
        return $img
      } else {
        return ''
      }
    })
  }

  colonToImage (input) {
    if (!input) {
      return ''
    }
    if (!Config.rx_colons) {
      Config.init_unified()
    }
    return input.replace(Config.rx_colons, function (m) {
      var $img
      if (m) {
        $img = $.emojiarea.createIcon($.emojiarea.icons[m])
        return $img
      } else {
        return ''
      }
    })
  }
  }

// # sourceMappingURL=emoji-picker.js.map
