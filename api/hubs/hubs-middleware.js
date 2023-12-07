const Hubs = require("./hubs-model.js");

async function checkHubId(req, res, next) {
  const hubId = req.params.id;
  try {
    const hub = await Hubs.findById(hubId);
    if (hub) {
      req.hub = hub;
      next();
    } else {
      next({ status: 404, message: `Hub ${hubId} not found` });
    }
  } catch (err) {
    next(err);
  }
}

function checkNewHub(req, res, next) {
  const { name } = req.body;
  if (
    name !== undefined &&
    typeof name === "string" &&
    name.length &&
    name.trim().length
  ) {
    next();
  } else {
    next({ status: 422, message: "Hubs need a name" });
  }
}

module.exports = {
  checkHubId,
  checkNewHub,
};
