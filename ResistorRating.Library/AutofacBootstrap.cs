using Autofac;
using ResistorRating.Library.Contracts;
using ResistorRating.Library.Services;

namespace ResistorRating.Library
{
    public class AutofacBootstrap : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<LookupService>().As<ILookupService>().SingleInstance();
            builder.RegisterType<OhmValueCalculatorService>().As<IOhmValueCalculator>().InstancePerDependency();
        }
    }
}
