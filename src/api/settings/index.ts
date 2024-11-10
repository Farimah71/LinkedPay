export const settingsApi = {
  //~~~~~~~~~~~~~~~~~ Company person ~~~~~~~~~~~~~~~~
  removeRoleToCompanyUser: "/CompanyPerson/RemoveRoleToCompanyUser",
  addCompanyPerson: "/CompanyPerson/AddCompanyPerson",
  companyPersonList: "/CompanyPerson/CompanyPersonList",
  getUserRolesForCompany: "/CompanyPerson/GetUserRolesForCompany",
  getRoleForCompanyUser: "/CompanyPerson/GetRoleForCompanyUser",
  companyPersonPermissionAdd: "/CompanyPerson/CompanyPersonPermissionAdd",

  // ~~~~~~~~~~~~~~~~ Contract ~~~~~~~~~~~~~~~~~
  contract: "/Contract/Get",

  // ~~~~~~~~~~~~~~~~ Contract type ~~~~~~~~~~~~~~~~~
  contractTypes: "/ContractType/GetAll",

  // ~~~~~~~~~~~~~~~~ Login log ~~~~~~~~~~~~~~~~~
  failedLogins: "/LoginLog/FailedLogins",
  unviewedBadLogins: "/LoginLog/UnViewedBadLogins",

  // ~~~~~~~~~~~~~~~~ Merchant requests ~~~~~~~~~~~~~~~~~
  websiteAdd: "/MerchantRequest/WebSiteAdd",
  websiteGetAll: "/MerchantRequest/WebSiteGetAll",
  websiteRequestGetAll: "/MerchantRequest/WebSiteRequestGetAll",
  websiteDetail: "/MerchantRequest/WebSiteDetail",
  webSiteRequestDetail: "/MerchantRequest/WebSiteRequestDetail",
  bankList: "/MerchantRequest/BankList",
  websiteCardMark: "/MerchantRequest/WebSiteCardMark",
  webSiteCommissionDetail: "/MerchantRequest/WebSiteCommissionDetail",

  // ~~~~~~~~~~~~~~~~ Person contract ~~~~~~~~~~~~~~~~~
  addPersonContract: "/PersonContract/Add",
  getPersonContract: "/PersonContract/Get",
  checkNotConfirmedContract:
    "/PersonContract/CheckNotConfirmedLastContractVersion",

  // ~~~~~~~~~~~~~~~~ Product ~~~~~~~~~~~~~~~~~
  getAllProduct: "/Product/GetAll",
  productDetail: "/Product/Detail",
  getAllActiveWebsites: "/Product/GetAllActiveWebsites",
  addProduct: "/Product/Add",
  deactiveProduct: "/Product/DeActive",

  // ~~~~~~~~~~~~~~~~ Profession ~~~~~~~~~~~~~~~~~
  getAllProfession: "/Profession/GetAll",

  // ~~~~~~~~~~~~~~~~ Real person ~~~~~~~~~~~~~~~~~
  getFilterRealPerson: "/RealPerson/GetFilter",

  // ~~~~~~~~~~~~~~~~ Request ~~~~~~~~~~~~~~~~~
  getFilterRequest: "/Request/GetFilter",
  controlBeforeRegistration: "/Request/ControlBeforeRegistration",
  corporateApp: "/Request/CorporateApp",

  // ~~~~~~~~~~~~~~~~ Task ~~~~~~~~~~~~~~~~~
  taskTypeGetAll: "/Task/TaskTypeGetAll",
  addTask: "/Task/Add",
  postByCorporateSite: "/Task/PostByCorporateSite",
  getAllTask: "/Task/GetAll",
  taskDetail: "/Task/Detail",
  taskReplyAdd: "/Task/ReplyAdd",
  ticketClosed: "/Task/TicketClosed",

  // ~~~~~~~~~~~~~~~~ User ~~~~~~~~~~~~~~~~~
  getuserInfo: "/User/GetUserInfo",
  isVerifiedIdentity: "/User/IsVerifiedIdentity",
  customerVerify: "/User/CustomerVerify",

  // ~~~~~~~~~~~~~~~~ User customer ~~~~~~~~~~~~~~~~~
  getAllUserCustomer: "/UserCustomer/GetAll",

  // ~~~~~~~~~~~~~~~~ VPos ~~~~~~~~~~~~~~~~~
  VPosTransactionSendMail: "/VPos/VPosTransactionSendMail",
  controlIbanNo: "/VPos/ControlIbanNo",
  cancelVPos: "/VPos/Cancel",
  refundVPos: "/VPos/Refund",
  capturePreAuthorization: "/VPos/CapturePreAuthorization",
  VposTransaction: "/VPos/VposTransaction",
  VposTransactionDetail: "/VPos/VposTransactionDetail",
  VposPayback: "/VPos/VposPayback",
  VposPaybackDetail: "/VPos/VposPaybackDetail",
  VposRefundDetail: "/VPos/VposRefundDetail",
  VposCancelDetail: "/VPos/VposCancelDetail",
  VposPayProvisionDetail: "/VPos/VposPayProvisionDetail",
};
