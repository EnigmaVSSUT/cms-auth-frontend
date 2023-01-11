import { create } from 'zustand'

const useThemeStore = create((set) => ({
	mode: localStorage.getItem('theme_mode') || 'light',
	toggleThemeMode: () => set((state) => ({
		mode: state.mode === 'light' ? 'dark' : 'light'
	}))
}))

export default useThemeStore