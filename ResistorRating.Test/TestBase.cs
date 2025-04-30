using Autofac;
using ResistorRating.Library;
using ResistorRating.Library.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResistorRating.Test
{
    public class TestBase
    {
        private IContainer _autofacContainer;
        protected IContainer AutofacContainer
        {
            get
            {
                if (_autofacContainer == null)
                {
                    var builder = new ContainerBuilder();

                    // Register the Autofac module
                    builder.RegisterModule(new AutofacBootstrap());

                    var container = builder.Build();

                    _autofacContainer = container;
                }

                return _autofacContainer;
            }
        }

        protected ILookupService LookupService
        {
            get
            {
                return AutofacContainer.Resolve<ILookupService>();
            }
        }

        protected IOhmValueCalculator OhmValueCalculatorService
        {
            get
            {
                return AutofacContainer.Resolve<IOhmValueCalculator>();
            }
        }
    }
}

