const ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  EMPLOYEE: "EMPLOYEE",
  CLIENT: "CLIENT",
};

const CLIENT_RESPONSE = {
  ACCEPT: "ACCEPT",
  REJECT: "REJECT",
};

const STOCK_CALL_TYPES = {
  BUY: "BUY",
  SELL: "SELL",
};

const MARKET_CALL_TYPES = {
  INTRADAY: "INTRADAY",
  SHORT_TERM: "SHORT_TERM",
  LONG_TERM: "LONG_TERM",
};

const CLIENT_TYPE = {
  DISCRETIONARY: "DISCRETIONARY",
  NON_DISCRETIONARY: "NON_DISCRETIONARY",
};

const RESPONSE_STATUS = {
  INITIATED: "INITIATED",
  COMPLETE: "COMPLETE",
  REJECTED: "REJECTED",
};

module.exports = {
  roleTypes: Object.keys(ROLES),
  clientResponses: Object.keys(CLIENT_RESPONSE),
  marketCallTypes: Object.keys(MARKET_CALL_TYPES),
  stockCallTypes: Object.keys(STOCK_CALL_TYPES),
  clientTypes: Object.keys(CLIENT_TYPE),
  responseStatus: Object.keys(RESPONSE_STATUS),
  CLIENT_RESPONSE,
  ROLES,
  MARKET_CALL_TYPES,
  STOCK_CALL_TYPES,
  CLIENT_TYPE,
  RESPONSE_STATUS,
};
