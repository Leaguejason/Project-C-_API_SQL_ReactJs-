using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Common;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Models.Entities;

namespace BACKEND_ZEAL_EDUCATION.Controllers;

[Route("api/[controller]/[action]")]
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
[ApiController]
public class BaseController<T> : ControllerBase
{
    protected readonly IConfiguration _config;
    protected readonly ProjectSem3Context _dbContext;
    protected readonly ILogger<T> _logger;

    public BaseController(ProjectSem3Context dbContext, ILogger<T> logger,
        IConfiguration config)
    {
        _dbContext = dbContext;
        _logger = logger;
        _config = config;
    }
    protected string GenerateToken(string username)
    {
        var secretKey = _config.GetValue<string>("Authen:Secret");
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey!));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, username)
        };

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddMinutes(100),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    protected string getCurrentUsernameLogin()
    {
        string? userName = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        return userName ?? "";
    }
}