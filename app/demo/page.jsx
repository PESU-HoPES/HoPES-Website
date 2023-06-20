import React from "react";
import Cursor from "../components/Cursor";
import Button from "../components/Button";

const DemoPage = () => {
	return (
		<div>
			<Cursor />
			<div className="my-32 flex justify-center gap-x-1">
				<Button
					type="primary"
					wide={true}
					size="large"
				>
					Sarang
				</Button>
				<Button
					type="default"
					wide={true}
					size="medium"
				>
					Sarang
				</Button>
				<Button
					type="primary"
					wide={true}
					size="small"
				>
					Sarang
				</Button>
				{/* <Button wide={false}>Sarang</Button>
        <Button type='svg' wide={false}>[]</Button> */}

			
				<div class="cursor"></div>
				<div class="cursor cursor2"></div>
			</div>
		</div>
	);
};

export default DemoPage;
