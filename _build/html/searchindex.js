Search.setIndex({"docnames": ["About", "Final_project", "Intro", "Task1", "notebooks", "prev4thPage", "prevIntro"], "filenames": ["About.md", "Final_project.ipynb", "Intro.md", "Task1.md", "notebooks.ipynb", "prev4thPage.md", "prevIntro.md"], "titles": ["Overview of project", "Solving the diffusion equation in r (under no-z approximation)", "Introduction", "Task 1", "Content with notebooks", "Discsussion", "What is MyST?"], "terms": {"i": [0, 1, 2, 3, 4, 5], "am": [0, 3], "upasana": 0, "4th": 0, "year": 0, "student": 0, "affili": 0, "school": 0, "physic": 0, "scienc": 0, "nation": 0, "institut": 0, "educ": 0, "research": 0, "bhubaneswar": 0, "india": 0, "thi": [0, 2, 3, 4, 5, 6], "comput": [0, 1, 2], "part": 0, "coursework": 0, "plasma": [0, 1], "magnetohydrodynam": [0, 1, 2], "taken": 0, "dr": [0, 1], "luke": 0, "chamandi": 0, "same": [0, 3, 6], "we": [0, 1, 2, 3], "ar": [0, 2, 3, 5, 6], "expect": [0, 1], "solv": [0, 2, 3], "numer": [0, 3], "mean": [0, 1, 2, 4], "field": 0, "galact": 0, "dynamo": [0, 2], "equat": [0, 2, 3], "deriv": [0, 2, 3], "us": [0, 2, 3, 5, 6], "first": [0, 1, 2, 3], "order": [0, 1, 2, 3], "smooth": 0, "approxim": [0, 2, 3], "e": [0, 2], "alpha": [0, 2], "b": [0, 1, 2, 3], "eta_t": [0, 1, 3], "nabla": [0, 2, 3], "time": [0, 1, 2, 3], "kinemat": [0, 1], "regim": [0, 1], "The": [0, 2, 3, 5, 6], "ha": 0, "been": [0, 2], "divid": 0, "three": 0, "diffus": [0, 3], "That": [0, 5], "omit": 0, "v": [0, 2], "\u03b1": 0, "term": 0, "so": [0, 5], "onli": 0, "remain": 0, "rh": 0, "those": [0, 6], "involv": 0, "\u03b7t": 0, "\u03b7": [0, 1], "precis": [0, 2], "common": 0, "all": [0, 2, 5, 6], "half": 0, "class": 0, "z": [0, 3], "other": [0, 5], "r": [0, 3], "under": [0, 3], "have": [0, 2, 5], "assign": 0, "latter": 0, "To": 0, "explor": [0, 1, 2], "evolut": [0, 1, 2], "magnet": 0, "magnitud": [0, 1], "exponenti": 0, "decai": [0, 1], "rate": [0, 1], "spatial": [0, 1, 2, 3], "solut": [0, 2, 3], "br": 0, "b\u03c6": 0, "pitch": 0, "angl": 0, "p": [0, 1], "how": [0, 5], "differ": [0, 1, 2, 6], "boundari": [0, 1, 2, 3], "condit": [0, 1, 2], "affect": 0, "result": 0, "seed": [0, 4], "right": [0, 3], "now": [0, 3], "websit": 0, "pertain": 0, "Will": 0, "updat": 0, "introduct": 0, "import": [1, 2, 4], "math": [1, 4], "matplotlib": [1, 4], "pyplot": [1, 4], "plt": [1, 4], "anim": 1, "from": [1, 3, 4], "scipi": 1, "special": [1, 6], "iv": 1, "kve": 1, "kv": 1, "provid": [1, 2], "modul": 1, "1st": 1, "numpi": [1, 4], "np": [1, 4], "def": 1, "boundary_conditions1": 1, "0": [1, 4], "nr": 1, "nt": 1, "implement": 1, "period": 1, "boundary_conditions2": 1, "t": [1, 2, 3, 4, 6], "rang": [1, 4], "roll": 1, "1": [1, 4], "axi": 1, "constant": [1, 3], "5": [1, 4], "\u03b7_t": 1, "estim": 1, "becaus": 1, "microscop": [1, 3], "h": [1, 3], "length": 1, "scale": [1, 2], "galaxi": [1, 2], "grid": [1, 2], "paramet": 1, "radial": 1, "r_max": 1, "15": 1, "maximum": 1, "distanc": 1, "kpc": 1, "200": 1, "increas": 1, "number": 1, "point": [1, 2], "direct": [1, 5], "total": 1, "500": 1, "step": [1, 2, 3], "dt": 1, "6th": [1, 3], "finit": [1, 2], "differenc": 1, "method": [1, 2], "fdm4": 1, "br_val": 1, "dbrdr": 1, "3": [1, 3], "j": 1, "9": [1, 3], "2": [1, 3, 5], "45": [1, 3], "60": [1, 3], "d2brdr2": 1, "27": [1, 3], "270": 1, "490": 1, "180": [1, 3], "dbrdt": 1, "pi": [1, 3], "4": [1, 3, 4, 5], "return": 1, "": [1, 2, 4, 5, 6], "gradient": [1, 2], "which": [1, 2, 3, 5], "itself": 1, "central": 1, "fdm": 1, "bi": 1, "rk4": 1, "k1": 1, "k2": 1, "k3": 1, "k4": 1, "6": [1, 3], "initi": [1, 2, 3], "compon": 1, "linspac": [1, 4], "sin": 1, "exp": 1, "tanh": 1, "shape": 1, "random": [1, 4], "randint": 1, "initialis": 1, "b_phi": 1, "co": 1, "OF": 1, "store": [1, 6], "posit": 1, "br_evolut": 1, "zero": 1, "scheme": [1, 2, 3], "rung": [1, 2], "kutta": [1, 2], "copi": 1, "b_phi_evolut": 1, "plot": [1, 4], "over": [1, 2], "figur": 1, "figsiz": [1, 4], "10": [1, 4], "ab": 1, "xlabel": 1, "ylabel": 1, "mag": 1, "titl": 1, "legend": [1, 4], "f": [1, 3], "2f": 1, "show": [1, 5, 6], "label": 1, "curv": 1, "certain": [1, 2], "At": 1, "eigenmod": 1, "compet": 1, "one": [1, 3, 6], "largest": 1, "growth": 1, "win": 1, "out": [1, 4], "eventu": 1, "come": [1, 3], "domin": 1, "thu": [1, 3], "do": [1, 4, 6], "sensit": 1, "evid": [1, 6], "In": [1, 2, 3, 6], "mhd": [1, 3], "crucial": [1, 2], "describ": 1, "orient": 1, "line": [1, 4, 5, 6], "respect": 1, "motion": 1, "here": [1, 2, 4, 6], "given": [1, 2, 3], "tan": 1, "frac": [1, 2, 3], "b_r": 1, "b_": 1, "phi": 1, "arctan": 1, "everi": 1, "15th": 1, "rad": 1, "xscale": 1, "log": 1, "yscale": 1, "defin": [1, 5], "creat": [1, 4], "arrai": [1, 3, 4], "br_valu": 1, "linestyl": 1, "dot": 1, "dashdot": 1, "two": [1, 2, 5, 6], "plai": 2, "role": 2, "interstellar": 2, "medium": [2, 4], "thei": [2, 6], "signific": 2, "spiral": 2, "bar": [2, 3], "irregular": 2, "dwarf": 2, "effort": 2, "model": 2, "larg": 2, "ongo": 2, "variou": 2, "astronom": 2, "studi": 2, "These": 2, "believ": 2, "amplifi": 2, "sustain": 2, "action": 2, "particularli": 2, "through": 2, "omega": 2, "mechan": 2, "quadrant": 2, "sagittariu": 2, "arm": 2, "complex": 2, "observ": 2, "includ": [2, 4, 5], "revers": 2, "still": 2, "fulli": 2, "character": 2, "intergalact": 2, "conduct": 2, "tool": [2, 6], "across": 2, "wavelength": 2, "theoret": 2, "concept": 2, "also": [2, 4, 5, 6], "being": [2, 3, 6], "context": 2, "project": 2, "aim": 2, "partial": [2, 3], "mathcal": 2, "eta": [2, 3], "mani": [2, 5, 6], "challeng": 2, "hydrodynam": 2, "can": [2, 3, 4, 5, 6], "simplifi": 2, "set": 2, "interconnect": 2, "differenti": [2, 3], "If": [2, 5], "face": 2, "second": 2, "ordinari": 2, "possibl": 2, "decompos": 2, "link": 2, "address": 2, "them": 2, "individu": 2, "specif": [2, 6], "an": [2, 6], "necessari": 2, "advanc": 2, "track": 2, "As": [2, 4], "domain": 2, "repres": 2, "mesh": 2, "appropri": 2, "while": 2, "analyt": 2, "sometim": 2, "feasibl": 2, "often": 2, "subject": 2, "prompt": 2, "util": 2, "One": 2, "eulerian": 2, "emploi": 2, "volum": 2, "element": 2, "techniqu": [2, 3], "calcul": [2, 3], "variabl": [2, 3], "each": 2, "subsequ": 2, "dure": 2, "process": 2, "accuraci": 2, "determin": 2, "its": 2, "signifi": 2, "rel": 2, "resolut": 2, "size": 2, "delta": [2, 3], "x": [2, 3], "higher": 2, "necessit": 2, "more": [2, 4, 5], "compar": 2, "lower": 2, "counterpart": 2, "altern": 2, "achiev": 2, "accomplish": 2, "finer": 2, "smaller": 2, "howev": 2, "ineffici": 2, "than": 2, "what": 2, "must": [2, 6], "suffici": 2, "captur": 2, "govern": 2, "dynam": 2, "pressur": 2, "avoid": 2, "instabl": 2, "essenti": 2, "forward": 2, "A": 2, "commonli": [2, 3], "purpos": [2, 6], "known": 2, "vari": 2, "correspond": 2, "up": 2, "power": [2, 6], "timestep": 2, "del": 2, "where": 3, "turbul": 3, "assum": 3, "formula": 3, "vector": 3, "laplacian": 3, "axisymmetr": 3, "b_i": 3, "left": 3, "make": [3, 4], "replac": 3, "rightarrow": 3, "2h": 3, "approach": 3, "depend": [3, 6], "taylor": 3, "expans": 3, "function": [3, 6], "scrutini": 3, "consid": 3, "_i": 3, "f_": 3, "2f_": 3, "270f_": 3, "490f_": 3, "27f_": 3, "wide": 3, "valu": 3, "problem": 3, "without": 3, "need": [3, 5], "high": 3, "fourth": 3, "most": [3, 6], "gener": 3, "n": [3, 4, 6], "coupl": 3, "od": 3, "begin": [3, 4], "rl": 3, "d": [3, 5], "y_1": 3, "f_1": 3, "y_2": 3, "ldot": 3, "y_n": 3, "f_2": 3, "vdot": 3, "f_n": 3, "end": [3, 4], "vec": 3, "y": 3, "sign": [3, 4], "simpli": 3, "impli": 3, "collect": 3, "case": 3, "take": 3, "form": 3, "align": [3, 4], "kappa": 3, "_1": 3, "x_i": 3, "_2": 3, "_3": 3, "_4": 3, "_": 3, "th": 3, "interv": 3, "code": [3, 5, 6], "access": 3, "github": 3, "you": [4, 5, 6], "jupyt": [4, 5, 6], "your": [4, 5, 6], "book": [4, 5, 6], "emb": 4, "imag": 4, "html": 4, "etc": 4, "post": 4, "add_": 4, "mbox": 4, "la_": 4, "tex": 4, "But": 4, "sure": 4, "escap": 4, "dollar": 4, "want": 4, "keep": 4, "work": 4, "well": 4, "For": [4, 6], "inform": [4, 5], "about": [4, 5, 6], "check": 4, "guid": 4, "see": [4, 5, 6], "document": [4, 5, 6], "exampl": [4, 6], "some": [4, 6], "sampl": 4, "rcparam": 4, "cycler": 4, "ion": 4, "contextlib": 4, "exitstack": 4, "0x7f2207a7fb50": 4, "fix": 4, "state": 4, "reproduc": 4, "19680801": 4, "data": 4, "logspac": 4, "100": 4, "randn": 4, "ii": 4, "cmap": 4, "cm": 4, "coolwarm": 4, "ax": 4, "prop_cycl": 4, "color": 4, "line2d": 4, "custom_lin": 4, "lw": 4, "fig": 4, "subplot": 4, "cold": 4, "hot": 4, "There": 4, "lot": [4, 6], "interact": 4, "let": 5, "write": [5, 6], "text": [5, 6], "base": 5, "detail": 5, "instruct": 5, "page": [5, 6], "off": [5, 6], "written": [5, 6], "With": 5, "like": [5, 6], "print": 5, "when": [5, 6], "built": 5, "content": [5, 6], "ani": 5, "block": 5, "execut": 5, "default": 5, "kernel": 5, "output": 5, "displai": 5, "rest": 5, "jupytext": 5, "convert": 5, "file": [5, 6], "support": 5, "thing": 5, "understand": 5, "should": 5, "top": 5, "presenc": 5, "get": [5, 6], "start": [5, 6], "treat": 5, "run": 5, "follow": [5, 6], "command": 5, "init": 5, "path": 5, "markdownfil": 5, "md": [5, 6], "whether": 6, "notebook": 6, "ipynb": 6, "regular": 6, "markdown": 6, "ll": 6, "flavor": 6, "call": 6, "simpl": 6, "help": 6, "syntax": 6, "stand": 6, "markedli": 6, "structur": 6, "It": 6, "slight": 6, "variat": 6, "commonmark": 6, "small": 6, "extens": 6, "allow": 6, "sphinx": 6, "ecosystem": 6, "overview": 6, "markup": 6, "languag": 6, "both": 6, "serv": 6, "similar": 6, "wherea": 6, "span": 6, "accept": 6, "kind": 6, "input": 6, "note": 6, "render": 6, "box": 6, "build": 6, "inlin": 6, "refer": 6, "cite": 6, "bibtex": 6, "holdgraf_evidence_2014": 6, "hdhpk14": 6, "moreov": 6, "insert": 6, "bibliographi": 6, "properli": 6, "bib": 6, "christoph": 6, "ramsai": 6, "holdgraf": 6, "wendi": 6, "de": 6, "heer": 6, "brian": 6, "paslei": 6, "robert": 6, "knight": 6, "predict": 6, "human": 6, "auditori": 6, "cortex": 6, "intern": 6, "confer": 6, "cognit": 6, "neurosci": 6, "brisban": 6, "australia": 6, "2014": 6, "frontier": 6, "just": 6, "starter": 6, "jupyterbook": 6, "org": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"overview": 0, "project": 0, "task": [0, 3], "1": [0, 3], "2": 0, "3": 0, "solv": 1, "diffus": 1, "equat": 1, "r": 1, "under": 1, "z": 1, "approxim": 1, "br": 1, "b_\u03c6": 1, "us": 1, "sinusoid": 1, "wave": 1, "seed": 1, "field": [1, 2], "exponenti": 1, "harri": 1, "sheet": 1, "magnet": [1, 2], "find": 1, "pitch": 1, "angl": 1, "overplot": 1, "exact": 1, "solut": 1, "modifi": 1, "bessel": 1, "function": 1, "2nd": 1, "kind": 1, "introduct": 2, "galact": 2, "numer": 2, "approach": 2, "finit": 3, "differ": 3, "method": 3, "rung": 3, "kutta": 3, "rk4": 3, "content": 4, "notebook": [4, 5], "markdown": [4, 5], "myst": [4, 5, 6], "code": 4, "block": 4, "output": 4, "discsuss": 5, "an": 5, "exampl": 5, "cell": 5, "creat": 5, "quickli": 5, "add": 5, "yaml": 5, "metadata": 5, "what": 6, "i": 6, "sampl": 6, "role": 6, "direct": 6, "citat": 6, "learn": 6, "more": 6}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Overview of project": [[0, "overview-of-project"]], "Task 1:": [[0, "task-1"]], "Task 2:": [[0, "task-2"]], "Task 3:": [[0, "task-3"]], "Solving the diffusion equation in r (under no-z approximation)": [[1, "solving-the-diffusion-equation-in-r-under-no-z-approximation"]], "Solving for Br and B_\u03a6": [[1, "solving-for-br-and-b"]], "Using sinusoidal waves as seed fields": [[1, "using-sinusoidal-waves-as-seed-fields"]], "Using exponential seed field": [[1, "using-exponential-seed-field"]], "Using seed field for Harris Sheet magnetic field": [[1, "using-seed-field-for-harris-sheet-magnetic-field"]], "Finding pitch angle": [[1, "finding-pitch-angle"]], "Overplotting exact solution for modified bessel function of 2nd kind": [[1, "overplotting-exact-solution-for-modified-bessel-function-of-2nd-kind"]], "Introduction": [[2, "introduction"]], "Galactic Magnetic Fields": [[2, "galactic-magnetic-fields"]], "Numerical Approaches": [[2, "numerical-approaches"]], "Task 1": [[3, "task-1"]], "Finite Difference Method": [[3, "finite-difference-method"]], "Runge Kutta Method (RK4)": [[3, "runge-kutta-method-rk4"]], "Content with notebooks": [[4, "content-with-notebooks"]], "Markdown + notebooks": [[4, "markdown-notebooks"]], "MyST markdown": [[4, "myst-markdown"]], "Code blocks and outputs": [[4, "code-blocks-and-outputs"]], "Discsussion": [[5, "discsussion"]], "An example cell": [[5, "an-example-cell"]], "Create a notebook with MyST Markdown": [[5, "create-a-notebook-with-myst-markdown"]], "Quickly add YAML metadata for MyST Notebooks": [[5, "quickly-add-yaml-metadata-for-myst-notebooks"]], "What is MyST?": [[6, "what-is-myst"]], "Sample Roles and Directives": [[6, "sample-roles-and-directives"]], "Citations": [[6, "citations"]], "Learn more": [[6, "learn-more"]]}, "indexentries": {}})