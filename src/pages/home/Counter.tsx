import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/hooks/hooks';
import { useAppSelector } from '@/hooks/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
} from '@/redux/features/counter/counterSlice';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h3 className="flex items-center justify-center bg-cyan-500 text-black text-3xl p-2 m-2">
        {count}
      </h3>
      <div className="flex gap-4 justify-center items-center *:cursor-pointer *:p-6 *:capitalize">
        <Button onClick={() => dispatch(increment())}>increment</Button>
        <Button onClick={() => dispatch(decrement())}>decrement</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>
          incrementByAmount
        </Button>
      </div>
    </>
  );
};

export default Counter;
