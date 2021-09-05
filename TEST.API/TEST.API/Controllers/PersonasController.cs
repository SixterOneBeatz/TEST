using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TEST.API.Hubs;
using TEST.API.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TEST.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonasController : ControllerBase
    {
        private readonly ApplicationDbContext Context;
        private readonly IMapper mapper;
        private readonly IHubContext<PersonaHub> _hub;

        public PersonasController(ApplicationDbContext context, IMapper mapper, IHubContext<PersonaHub> hubContext)
        {
            Context = context;
            this.mapper = mapper;
            _hub = hubContext;
        }
        // GET: api/<PersonasController>
        [HttpGet]
        public async Task<ActionResult<List<Persona>>> Get()
        {
            return await Context.Personas.ToListAsync();
        }

        // GET api/<PersonasController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Persona>> Get(int id)
        {
            var persona = await Context.Personas.FirstAsync(x => x.Id == id);
            if (persona == null)
            {
                return NotFound();
            }
            return Ok(persona);
        }

        // POST api/<PersonasController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Persona persona)
        {
            Context.Add(persona);
            int result = await Context.SaveChangesAsync();
            List<Persona> personas = await Context.Personas.ToListAsync();
            await _hub.Clients.All.SendAsync("DbChanges", personas);
            return Ok(result);
        }

        //PUT api/<PersonasController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] Persona persona)
        {
            var p = await Context.Personas.FirstAsync(x => x.Id == id);
            if (p == null)
            {
                return NotFound();
            }
            p = mapper.Map(persona, p);
            int result = await Context.SaveChangesAsync();
            List<Persona> personas = await Context.Personas.ToListAsync();
            await _hub.Clients.All.SendAsync("DbChanges", personas);
            return Ok(result);
        }

        // DELETE api/<PersonasController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var exists = await Context.Personas.AnyAsync(x => x.Id == id);
            if (!exists)
            {
                return NotFound();
            }
            Context.Remove(new Persona() { Id = id });
            int result = await Context.SaveChangesAsync();
            List<Persona> personas = await Context.Personas.ToListAsync();
            await _hub.Clients.All.SendAsync("DbChanges", personas);
            return Ok(result);
        }
    }
}
