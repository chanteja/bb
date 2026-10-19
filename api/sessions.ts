<<<<<<< HEAD
import {failure,json,listSessions,owner} from '../lib/session-store';
import {withVisitor,methodNotAllowed} from '../server/visitor.mjs';

async function GET(request:Request){
  try{
    return json({sessions:await listSessions(owner(request))});
  }catch(error){
    return failure(error);
  }
}

export default {
  fetch:withVisitor((request:Request)=>request.method==='GET'?GET(request):methodNotAllowed())
};
=======
import {GET} from '../app/api/sessions/route';
import {withVisitor,methodNotAllowed} from '../server/visitor.mjs';
export default {fetch:withVisitor((r:Request)=>r.method==='GET'?GET(r):methodNotAllowed())};
>>>>>>> 62d4d9c098054b9134891b4186cae39532c63cd4
