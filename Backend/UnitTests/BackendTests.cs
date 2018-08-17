using System;
using System.IO;
using Backend.Controllers;
using Microsoft.Extensions.Configuration;
using Xunit;

namespace UnitTests
{
	public class BackendTests
	{
		public IConfiguration Configuration { get; }

		public BackendTests() 
		{
			Configuration = new ConfigurationBuilder()
				.SetBasePath(Path.GetFullPath(@"../../../../Backend/"))
				.Build();

		}

		[Fact]
		public void SayHello()
		{
			// Arrange
			var controller = new ApiController(new TestHostingEnvironment());

			// Act
			var result = controller.Get();

			// Assert
			Assert.Equal("Hello, World!", result);
		}
	}
}
