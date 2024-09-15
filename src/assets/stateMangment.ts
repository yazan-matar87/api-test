import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  selectedId: number | null;
  showModal: () => void;
  hideModal: () => void;
  setSelectedId: (id: number) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  selectedId: null,
  showModal: () => set({ isModalOpen: true }),
  hideModal: () => set({ isModalOpen: false }),
  setSelectedId: (id) => set({ selectedId: id }),
}));
