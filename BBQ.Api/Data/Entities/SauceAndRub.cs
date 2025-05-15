using BBQ.Api.Data.Enums;

namespace BBQ.Api.Data;

public class SauceAndRub
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Ingredients { get; set; }
    public SauceOrRubType Type { get; set; }
}