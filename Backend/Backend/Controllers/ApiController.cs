using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
	[Route("api/")]
	public class ApiController : Controller
	{
		[HttpGet]
		[Route("hello")]
		public string Get()
		{
			return "Hello, World!";
		}

		[HttpGet]
		[Route("hello/{name}")]
		public string Get(string name)
		{
			return "Hello, " + name;
		}
	}
}
