export function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function sleep(ms = 200) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const storage = {
  get(entity) {
    let value = window.localStorage.getItem(entity);
    return JSON.parse(value);
  },
  set(entity, item) {
    let value = JSON.stringify(item);
    return window.localStorage.setItem(entity, value);
  }
};
