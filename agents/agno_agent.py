from agno.app.agui.app import AGUIApp
from agno.agent.agent import Agent
from agno.models.google import Gemini

# Setup your Agno Agent, can be any Agno Agent
agent = Agent(
    name="Agno Assistant",
    model=Gemini(id="gemini-2.0-flash-lite"),
    instructions="You are a helpful AI assistant.",
)

# Setup the AG-UI app
agui_app = AGUIApp(
    agent=agent,
    name="Durgesh Babu Personal Agent",
    app_id="agno_agent",
)
app = agui_app.get_app()

# Serve the app, effectively exposing your Agno Agent
agui_app.serve(app="agno_agent:app", port=8000, reload=True)