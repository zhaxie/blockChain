export const manualCanCelRequest = "手动取消操作";

export const catchError = (error) => {
  console.error("捕获错误", error);

  if (typeof error === "object") {
    error = JSON.stringify(error);
  }

  if (new RegExp(manualCanCelRequest).test(error)) {
    console.warn(manualCanCelRequest);
    return false;
  }

  message.error(error);
};