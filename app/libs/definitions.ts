export type User = {
  id: String;
  name: String;
  email: String;
};

export type Message = {
  from: String;
  to: String;
  content: String;
  timeSent: String;
  timereceveied: String;
  seen: Boolean;
};
