import { getCurrentInstance, computed, warn } from 'vue'

// NOTE: Since it depends on Vue internals, it's likely to break when the vnode
// implementation changes.
export function useShadowHost () {
  const instance = getCurrentInstance()

  return computed(() => {
    try {
      return instance!.vnode!.el!.parentNode.host as HTMLElement
    } catch (error) {
      warn('component instance or element not available, can not find shadow host', instance)
      return undefined
    }
  })
}
