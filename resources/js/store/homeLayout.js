import {create} from 'zustand';

export const useHomeLayoutStore = create((set) => ({
  homeLayout: {
    menu_items: [],
    notifications: [],
    sidebars: { leftbar: [], rightbar: [] },
    footer: [],
  },
  setMenu: (menu_items) => set((state) => ({ homeLayout: { ...state.homeLayout, menu_items } })),
  setNotifications: (notifications) => set((state) => ({ homeLayout: { ...state.homeLayout, notifications } })),
  setSidebars: (sidebars) => set((state) => ({ homeLayout: { ...state.homeLayout, sidebars } })),
  setFooter: (footer) => set((state) => ({ homeLayout: { ...state.homeLayout, footer } })),
}));

