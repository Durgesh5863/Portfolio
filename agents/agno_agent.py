from agno.app.agui.app import AGUIApp
from agno.agent.agent import Agent
from agno.models import OpenAIChat # Assuming you are using OpenAI, adjust if using Gemini with AGNO

# Setup your Agno Agent, can be any Agno Agent
agent = Agent(
    name="Agno Assistant",
    model=OpenAIChat(id="gpt-4o"), # Replace with your Gemini model if AGNO supports it
    instructions="You are a helpful AI assistant.",
)

# Setup the AG-UI app
agui_app = AGUIApp(
    agent=agent,
    name="AG-UI Agno Agent",
    app_id="agno_agent",
)
app = agui_app.get_app()

# Serve the app, effectively exposing your Agno Agent
agui_app.serve(app="agno_agent:app", port=8000, reload=True)