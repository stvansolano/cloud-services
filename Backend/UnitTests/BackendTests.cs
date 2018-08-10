using System;
using Backend.Controllers;
using Xunit;

namespace UnitTests
{
	public class BackendTests
	{
		[Fact]
		public void SayHello()
		{
			// Arrange
			var controller = new ApiController();

			// Act
			var result = controller.Get();

			// Assert
			Assert.Equal("Hello, World!", result);
		}
	}
}
