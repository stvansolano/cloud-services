using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.FileProviders;

namespace UnitTests
{
	public class TestHostingEnvironment : IHostingEnvironment
	{
		public string EnvironmentName { get; set; }
		public string ApplicationName { get; set; }
		public string WebRootPath { get; set; }

		public IFileProvider WebRootFileProvider { get; set; }
		public string ContentRootPath { get; set; } = Directory.GetCurrentDirectory();
		public IFileProvider ContentRootFileProvider { get; set; }
	}

}
