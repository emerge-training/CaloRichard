#! eqela ss-0.21
#
# This file is part of Sling Tasklist
# All rights reserved.
#

lib sling-tools:0.34.0
import sling.tools.compiler
SlingCompilerTool.forSushiApplicationDirectory("app").executeScript(args)
