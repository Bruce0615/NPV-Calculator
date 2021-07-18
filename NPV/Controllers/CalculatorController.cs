using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NPV.Controllers
{
    public class CalculatorController : Controller
    {
        // GET: NPV
        public ActionResult Index()
        {
            ViewBag.Title = "Calculator";
            return View();
        }
    }
}