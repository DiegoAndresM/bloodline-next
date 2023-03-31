import Image from 'next/image';

export default function Request({ request }) {
  const { paciente_name, hospital_name, blood_type, phone, description } = request;

  return (

    <div className="flex w-full shadow-xl" key={request.id}>
    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUUQDPJSUoiDVHqHStGIgXqT0fvOC_5IXqQ&usqp=CAU" alt="Movie" /></figure>
    <div className="card-body">
        <h2 className="card-title">{paciente_name}</h2>
        <p>{hospital_name}</p>
        <p>{blood_type}</p>
        <p>{phone}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Contactar</button>
        </div>
    </div>
</div>
  );
}

