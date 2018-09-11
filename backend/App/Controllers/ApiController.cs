using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace App.Controllers
{
	[Route("api/")]
	public class ApiController : Controller
	{
		public IHostingEnvironment Environment { get; }

		public ApiController(IHostingEnvironment environment)
		{
			Environment = environment;
		}

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        
		[HttpGet]
		[Route("hello")]
		public string Get()
		{
			return "Hello, World!";
		}
        
		#region Private Methods

		private string GetConfigurationFileContent(string fileName)
		{
			var filePath = Environment.ContentRootPath
			   + Path.DirectorySeparatorChar.ToString()
			   + "Configuration"
			   + Path.DirectorySeparatorChar.ToString()
									  + fileName;

			return System.IO.File.ReadAllText(filePath);
		}

		#endregion
	}
}