const MailBuilder = (function () {
  function MailBuilder(id) {
    this.id = id;
  }

  /** @private */
  let privateMethod = function () {};

  MailBuilder.build = function () {
    console.log("bind called");
  };

  MailBuilder.prototype.createAddress = function (address) {
    this.address = address;
    console.log("createAddress called");
  };
  return MailBuilder;
})();

/** @class @extends {MailBuilder} */
const ChildMailBuilder = (function () {
  function ChildMailBuilder(id, name) {
    MailBuilder.call(this, id);
    this.id = id;
    this.childName = name;
  }
  ChildMailBuilder.prototype = Object.create(MailBuilder.prototype);

  ChildMailBuilder.prototype.createSupara = function (s) {
    this.s = s;
    console.log("createSupara called");
  };
  return ChildMailBuilder;
})();


new ChildMailBuilder("id", "lawda").createAddress("address");
