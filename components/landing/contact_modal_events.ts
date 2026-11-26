export const CONTACT_MODAL_OPEN_EVENT = "nuteam:open-contact-modal";

export function requestContactModalOpen() {
  window.dispatchEvent(new Event(CONTACT_MODAL_OPEN_EVENT));
}
