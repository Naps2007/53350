// Generated from x:/sint tp/programas/proyecto/ssl-antlr-calculator/Flujo.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
const serializedATN = [4,1,36,136,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,5,0,35,8,0,10,0,12,0,38,9,0,1,0,1,0,
1,1,1,1,1,1,1,1,1,1,3,1,47,8,1,1,2,1,2,1,2,3,2,52,8,2,1,2,1,2,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,5,3,63,8,3,10,3,12,3,66,9,3,1,3,1,3,1,3,1,4,1,4,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,89,8,6,1,7,
1,7,1,7,1,7,5,7,95,8,7,10,7,12,7,98,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,3,8,114,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,
10,1,10,3,10,126,8,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,0,0,15,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,3,1,0,3,4,1,0,7,11,1,0,20,21,133,
0,30,1,0,0,0,2,46,1,0,0,0,4,48,1,0,0,0,6,55,1,0,0,0,8,70,1,0,0,0,10,72,1,
0,0,0,12,88,1,0,0,0,14,90,1,0,0,0,16,113,1,0,0,0,18,115,1,0,0,0,20,125,1,
0,0,0,22,127,1,0,0,0,24,129,1,0,0,0,26,131,1,0,0,0,28,133,1,0,0,0,30,31,
5,1,0,0,31,32,3,24,12,0,32,36,5,22,0,0,33,35,3,2,1,0,34,33,1,0,0,0,35,38,
1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,
23,0,0,40,1,1,0,0,0,41,47,3,4,2,0,42,47,3,6,3,0,43,47,3,10,5,0,44,47,3,14,
7,0,45,47,3,18,9,0,46,41,1,0,0,0,46,42,1,0,0,0,46,43,1,0,0,0,46,44,1,0,0,
0,46,45,1,0,0,0,47,3,1,0,0,0,48,49,5,2,0,0,49,51,3,24,12,0,50,52,7,0,0,0,
51,50,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,5,28,0,0,54,5,1,0,0,0,55,
56,5,5,0,0,56,57,3,24,12,0,57,58,5,6,0,0,58,59,5,24,0,0,59,64,3,8,4,0,60,
61,5,29,0,0,61,63,3,8,4,0,62,60,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,
1,0,0,0,65,67,1,0,0,0,66,64,1,0,0,0,67,68,5,25,0,0,68,69,5,28,0,0,69,7,1,
0,0,0,70,71,7,1,0,0,71,9,1,0,0,0,72,73,5,12,0,0,73,74,3,24,12,0,74,75,5,
13,0,0,75,76,3,24,12,0,76,77,5,14,0,0,77,78,3,12,6,0,78,79,5,28,0,0,79,11,
1,0,0,0,80,81,3,24,12,0,81,82,5,30,0,0,82,83,3,8,4,0,83,89,1,0,0,0,84,85,
3,24,12,0,85,86,5,32,0,0,86,87,3,20,10,0,87,89,1,0,0,0,88,80,1,0,0,0,88,
84,1,0,0,0,89,13,1,0,0,0,90,91,5,15,0,0,91,92,3,24,12,0,92,96,5,22,0,0,93,
95,3,16,8,0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,99,
1,0,0,0,98,96,1,0,0,0,99,100,5,23,0,0,100,15,1,0,0,0,101,102,5,16,0,0,102,
103,3,24,12,0,103,104,5,31,0,0,104,105,3,20,10,0,105,106,5,28,0,0,106,114,
1,0,0,0,107,108,5,17,0,0,108,109,5,26,0,0,109,110,3,26,13,0,110,111,5,27,
0,0,111,112,5,28,0,0,112,114,1,0,0,0,113,101,1,0,0,0,113,107,1,0,0,0,114,
17,1,0,0,0,115,116,5,18,0,0,116,117,3,24,12,0,117,118,5,19,0,0,118,119,3,
26,13,0,119,120,5,28,0,0,120,19,1,0,0,0,121,126,3,26,13,0,122,126,3,28,14,
0,123,126,3,22,11,0,124,126,3,24,12,0,125,121,1,0,0,0,125,122,1,0,0,0,125,
123,1,0,0,0,125,124,1,0,0,0,126,21,1,0,0,0,127,128,7,2,0,0,128,23,1,0,0,
0,129,130,5,33,0,0,130,25,1,0,0,0,131,132,5,35,0,0,132,27,1,0,0,0,133,134,
5,34,0,0,134,29,1,0,0,0,8,36,46,51,64,88,96,113,125];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FlujoParser extends antlr4.Parser {

    static grammarFileName = "Flujo.g4";
    static literalNames = [ null, "'flujo'", "'estado'", "'inicial'", "'final'", 
                            "'rol'", "'puede'", "'crear'", "'revisar'", 
                            "'aprobar'", "'rechazar'", "'archivar'", "'desde'", 
                            "'hacia'", "'cuando'", "'accion'", "'asignar'", 
                            "'registrar'", "'notificar'", "'con'", "'verdadero'", 
                            "'falso'", "'{'", "'}'", "'['", "']'", "'('", 
                            "')'", "';'", "','", "'.'", "'='", "'=='" ];
    static symbolicNames = [ null, "FLUJO", "ESTADO", "INICIAL", "FINAL", 
                             "ROL", "PUEDE", "CREAR", "REVISAR", "APROBAR", 
                             "RECHAZAR", "ARCHIVAR", "DESDE", "HACIA", "CUANDO", 
                             "ACCION", "ASIGNAR", "REGISTRAR", "NOTIFICAR", 
                             "CON", "VERDADERO", "FALSO", "LLAVE_IZQ", "LLAVE_DER", 
                             "CORCHETE_IZQ", "CORCHETE_DER", "PARENTESIS_IZQ", 
                             "PARENTESIS_DER", "PUNTO_COMA", "COMA", "PUNTO", 
                             "IGUAL", "IGUAL_IGUAL", "ID", "NUMBER", "STRING", 
                             "WS" ];
    static ruleNames = [ "programa", "definicion", "estado", "rol", "permiso", 
                         "transicion", "condicion", "accion", "instruccion", 
                         "notificacion", "valor", "booleano", "identificador", 
                         "cadena", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FlujoParser.ruleNames;
        this.literalNames = FlujoParser.literalNames;
        this.symbolicNames = FlujoParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FlujoParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(FlujoParser.FLUJO);
	        this.state = 31;
	        this.identificador();
	        this.state = 32;
	        this.match(FlujoParser.LLAVE_IZQ);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 299044) !== 0)) {
	            this.state = 33;
	            this.definicion();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this.match(FlujoParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definicion() {
	    let localctx = new DefinicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FlujoParser.RULE_definicion);
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.estado();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.rol();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this.transicion();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 44;
	            this.accion();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 45;
	            this.notificacion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FlujoParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(FlujoParser.ESTADO);
	        this.state = 49;
	        this.identificador();
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3 || _la===4) {
	            this.state = 50;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 53;
	        this.match(FlujoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rol() {
	    let localctx = new RolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FlujoParser.RULE_rol);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(FlujoParser.ROL);
	        this.state = 56;
	        this.identificador();
	        this.state = 57;
	        this.match(FlujoParser.PUEDE);
	        this.state = 58;
	        this.match(FlujoParser.CORCHETE_IZQ);
	        this.state = 59;
	        this.permiso();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 60;
	            this.match(FlujoParser.COMA);
	            this.state = 61;
	            this.permiso();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 67;
	        this.match(FlujoParser.CORCHETE_DER);
	        this.state = 68;
	        this.match(FlujoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	permiso() {
	    let localctx = new PermisoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FlujoParser.RULE_permiso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3968) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transicion() {
	    let localctx = new TransicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FlujoParser.RULE_transicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(FlujoParser.DESDE);
	        this.state = 73;
	        this.identificador();
	        this.state = 74;
	        this.match(FlujoParser.HACIA);
	        this.state = 75;
	        this.identificador();
	        this.state = 76;
	        this.match(FlujoParser.CUANDO);
	        this.state = 77;
	        this.condicion();
	        this.state = 78;
	        this.match(FlujoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FlujoParser.RULE_condicion);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.identificador();
	            this.state = 81;
	            this.match(FlujoParser.PUNTO);
	            this.state = 82;
	            this.permiso();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.identificador();
	            this.state = 85;
	            this.match(FlujoParser.IGUAL_IGUAL);
	            this.state = 86;
	            this.valor();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FlujoParser.RULE_accion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(FlujoParser.ACCION);
	        this.state = 91;
	        this.identificador();
	        this.state = 92;
	        this.match(FlujoParser.LLAVE_IZQ);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16 || _la===17) {
	            this.state = 93;
	            this.instruccion();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
	        this.match(FlujoParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FlujoParser.RULE_instruccion);
	    try {
	        this.state = 113;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.match(FlujoParser.ASIGNAR);
	            this.state = 102;
	            this.identificador();
	            this.state = 103;
	            this.match(FlujoParser.IGUAL);
	            this.state = 104;
	            this.valor();
	            this.state = 105;
	            this.match(FlujoParser.PUNTO_COMA);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this.match(FlujoParser.REGISTRAR);
	            this.state = 108;
	            this.match(FlujoParser.PARENTESIS_IZQ);
	            this.state = 109;
	            this.cadena();
	            this.state = 110;
	            this.match(FlujoParser.PARENTESIS_DER);
	            this.state = 111;
	            this.match(FlujoParser.PUNTO_COMA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	notificacion() {
	    let localctx = new NotificacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FlujoParser.RULE_notificacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(FlujoParser.NOTIFICAR);
	        this.state = 116;
	        this.identificador();
	        this.state = 117;
	        this.match(FlujoParser.CON);
	        this.state = 118;
	        this.cadena();
	        this.state = 119;
	        this.match(FlujoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FlujoParser.RULE_valor);
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.cadena();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.numero();
	            break;
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 123;
	            this.booleano();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 124;
	            this.identificador();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FlujoParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FlujoParser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(FlujoParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FlujoParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(FlujoParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, FlujoParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(FlujoParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

FlujoParser.EOF = antlr4.Token.EOF;
FlujoParser.FLUJO = 1;
FlujoParser.ESTADO = 2;
FlujoParser.INICIAL = 3;
FlujoParser.FINAL = 4;
FlujoParser.ROL = 5;
FlujoParser.PUEDE = 6;
FlujoParser.CREAR = 7;
FlujoParser.REVISAR = 8;
FlujoParser.APROBAR = 9;
FlujoParser.RECHAZAR = 10;
FlujoParser.ARCHIVAR = 11;
FlujoParser.DESDE = 12;
FlujoParser.HACIA = 13;
FlujoParser.CUANDO = 14;
FlujoParser.ACCION = 15;
FlujoParser.ASIGNAR = 16;
FlujoParser.REGISTRAR = 17;
FlujoParser.NOTIFICAR = 18;
FlujoParser.CON = 19;
FlujoParser.VERDADERO = 20;
FlujoParser.FALSO = 21;
FlujoParser.LLAVE_IZQ = 22;
FlujoParser.LLAVE_DER = 23;
FlujoParser.CORCHETE_IZQ = 24;
FlujoParser.CORCHETE_DER = 25;
FlujoParser.PARENTESIS_IZQ = 26;
FlujoParser.PARENTESIS_DER = 27;
FlujoParser.PUNTO_COMA = 28;
FlujoParser.COMA = 29;
FlujoParser.PUNTO = 30;
FlujoParser.IGUAL = 31;
FlujoParser.IGUAL_IGUAL = 32;
FlujoParser.ID = 33;
FlujoParser.NUMBER = 34;
FlujoParser.STRING = 35;
FlujoParser.WS = 36;

FlujoParser.RULE_programa = 0;
FlujoParser.RULE_definicion = 1;
FlujoParser.RULE_estado = 2;
FlujoParser.RULE_rol = 3;
FlujoParser.RULE_permiso = 4;
FlujoParser.RULE_transicion = 5;
FlujoParser.RULE_condicion = 6;
FlujoParser.RULE_accion = 7;
FlujoParser.RULE_instruccion = 8;
FlujoParser.RULE_notificacion = 9;
FlujoParser.RULE_valor = 10;
FlujoParser.RULE_booleano = 11;
FlujoParser.RULE_identificador = 12;
FlujoParser.RULE_cadena = 13;
FlujoParser.RULE_numero = 14;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_programa;
    }

	FLUJO() {
	    return this.getToken(FlujoParser.FLUJO, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LLAVE_IZQ() {
	    return this.getToken(FlujoParser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(FlujoParser.LLAVE_DER, 0);
	};

	definicion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinicionContext);
	    } else {
	        return this.getTypedRuleContext(DefinicionContext,i);
	    }
	};


}



class DefinicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_definicion;
    }

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	rol() {
	    return this.getTypedRuleContext(RolContext,0);
	};

	transicion() {
	    return this.getTypedRuleContext(TransicionContext,0);
	};

	accion() {
	    return this.getTypedRuleContext(AccionContext,0);
	};

	notificacion() {
	    return this.getTypedRuleContext(NotificacionContext,0);
	};


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_estado;
    }

	ESTADO() {
	    return this.getToken(FlujoParser.ESTADO, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(FlujoParser.PUNTO_COMA, 0);
	};

	INICIAL() {
	    return this.getToken(FlujoParser.INICIAL, 0);
	};

	FINAL() {
	    return this.getToken(FlujoParser.FINAL, 0);
	};


}



class RolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_rol;
    }

	ROL() {
	    return this.getToken(FlujoParser.ROL, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	PUEDE() {
	    return this.getToken(FlujoParser.PUEDE, 0);
	};

	CORCHETE_IZQ() {
	    return this.getToken(FlujoParser.CORCHETE_IZQ, 0);
	};

	permiso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PermisoContext);
	    } else {
	        return this.getTypedRuleContext(PermisoContext,i);
	    }
	};

	CORCHETE_DER() {
	    return this.getToken(FlujoParser.CORCHETE_DER, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(FlujoParser.PUNTO_COMA, 0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlujoParser.COMA);
	    } else {
	        return this.getToken(FlujoParser.COMA, i);
	    }
	};



}



class PermisoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_permiso;
    }

	CREAR() {
	    return this.getToken(FlujoParser.CREAR, 0);
	};

	REVISAR() {
	    return this.getToken(FlujoParser.REVISAR, 0);
	};

	APROBAR() {
	    return this.getToken(FlujoParser.APROBAR, 0);
	};

	RECHAZAR() {
	    return this.getToken(FlujoParser.RECHAZAR, 0);
	};

	ARCHIVAR() {
	    return this.getToken(FlujoParser.ARCHIVAR, 0);
	};


}



class TransicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_transicion;
    }

	DESDE() {
	    return this.getToken(FlujoParser.DESDE, 0);
	};

	identificador = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentificadorContext);
	    } else {
	        return this.getTypedRuleContext(IdentificadorContext,i);
	    }
	};

	HACIA() {
	    return this.getToken(FlujoParser.HACIA, 0);
	};

	CUANDO() {
	    return this.getToken(FlujoParser.CUANDO, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(FlujoParser.PUNTO_COMA, 0);
	};


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_condicion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	PUNTO() {
	    return this.getToken(FlujoParser.PUNTO, 0);
	};

	permiso() {
	    return this.getTypedRuleContext(PermisoContext,0);
	};

	IGUAL_IGUAL() {
	    return this.getToken(FlujoParser.IGUAL_IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_accion;
    }

	ACCION() {
	    return this.getToken(FlujoParser.ACCION, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LLAVE_IZQ() {
	    return this.getToken(FlujoParser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(FlujoParser.LLAVE_DER, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_instruccion;
    }

	ASIGNAR() {
	    return this.getToken(FlujoParser.ASIGNAR, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	IGUAL() {
	    return this.getToken(FlujoParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(FlujoParser.PUNTO_COMA, 0);
	};

	REGISTRAR() {
	    return this.getToken(FlujoParser.REGISTRAR, 0);
	};

	PARENTESIS_IZQ() {
	    return this.getToken(FlujoParser.PARENTESIS_IZQ, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PARENTESIS_DER() {
	    return this.getToken(FlujoParser.PARENTESIS_DER, 0);
	};


}



class NotificacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_notificacion;
    }

	NOTIFICAR() {
	    return this.getToken(FlujoParser.NOTIFICAR, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	CON() {
	    return this.getToken(FlujoParser.CON, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(FlujoParser.PUNTO_COMA, 0);
	};


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_valor;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(FlujoParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(FlujoParser.FALSO, 0);
	};


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_identificador;
    }

	ID() {
	    return this.getToken(FlujoParser.ID, 0);
	};


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_cadena;
    }

	STRING() {
	    return this.getToken(FlujoParser.STRING, 0);
	};


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlujoParser.RULE_numero;
    }

	NUMBER() {
	    return this.getToken(FlujoParser.NUMBER, 0);
	};


}




FlujoParser.ProgramaContext = ProgramaContext; 
FlujoParser.DefinicionContext = DefinicionContext; 
FlujoParser.EstadoContext = EstadoContext; 
FlujoParser.RolContext = RolContext; 
FlujoParser.PermisoContext = PermisoContext; 
FlujoParser.TransicionContext = TransicionContext; 
FlujoParser.CondicionContext = CondicionContext; 
FlujoParser.AccionContext = AccionContext; 
FlujoParser.InstruccionContext = InstruccionContext; 
FlujoParser.NotificacionContext = NotificacionContext; 
FlujoParser.ValorContext = ValorContext; 
FlujoParser.BooleanoContext = BooleanoContext; 
FlujoParser.IdentificadorContext = IdentificadorContext; 
FlujoParser.CadenaContext = CadenaContext; 
FlujoParser.NumeroContext = NumeroContext; 
