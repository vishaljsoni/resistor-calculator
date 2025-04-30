using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ResistorRating.Library;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers()
    .AddNewtonsoftJson();

// Use Autofac as the ServiceProviderFactory
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder => 
{
    // Register your Autofac modules
    containerBuilder.RegisterModule(new AutofacBootstrap());
});

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Enable CORS before routing to ensure it's applied to all requests
app.UseCors(policy => 
    policy.WithOrigins("http://localhost:4200", "http://localhost:4201", "http://0.0.0.0:4200", "http://0.0.0.0:4201")
          .AllowAnyMethod()
          .AllowAnyHeader()
          .SetIsOriginAllowed(origin => true)); // Allow any origin

app.UseRouting();
app.UseAuthorization();

app.MapControllers();

app.Run();